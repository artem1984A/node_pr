const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const multer = require('multer');
const cookieParser = require('cookie-parser');
const cluster = require('cluster');
const os = require('os');

const numCPUs = os.cpus().length;


// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Port configuration
const PORT = process.env.PORT || 3000;

// Clustering setup
if (cluster.isMaster) {
  console.log(`Master process ${process.pid} is running`);

  // Fork two workers: one for React app and one for general routes
  const reactAppWorker = cluster.fork({ workerType: 'reactApp' });
  const generalRoutesWorker = cluster.fork({ workerType: 'generalRoutes' });

  // Handle worker crashes
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    if (worker.process.env.workerType === 'reactApp') {
      console.log("Restarting React app worker...");
      cluster.fork({ workerType: 'reactApp' });
    } else if (worker.process.env.workerType === 'generalRoutes') {
      console.log("Restarting General routes worker...");
      cluster.fork({ workerType: 'generalRoutes' });
    }
  });

} else if (cluster.isWorker) {
  // Worker for React App routes and its APIs
  if (process.env.workerType === 'reactApp') {
    console.log(`React App Worker ${process.pid} started`);


    
    const app = express();

    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    // Serve the React app
    // Serve static files from the React app build directory
// Serve static files from the React app build directory
app.use('/basis-react-app', express.static(path.resolve(__dirname, 'dist')));
app.get('/basis-react-app/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});
 // Start server for React app and its API routes
 app.listen(PORT, '0.0.0.0', () => {
  console.log(`React App Worker running on port ${PORT} (PID: ${process.pid})`);
});}
  else if (process.env.workerType === 'generalRoutes') {
    console.log(`General Routes Worker ${process.pid} started`);
  
    const app = express();
  
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
  
    // General routes not related to the React app
    app.get('/linkedin', (req, res) => {
      const linkedinURL = 'https://www.linkedin.com/in/artem-ryzhov-90560a2a0/';
      res.redirect(linkedinURL);
    });
    const upload = multer({ storage: storage });
  
  
  // Serve static files from the 'static' directory
  app.use(express.static(path.resolve(__dirname, 'static')));
  // Serve static files from the React app build directory
  
  
  
  
  
  app.get('/index.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, './static/index.html'));
  });
  
  
  
  
  app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));
  // Serve specific index.html from the 'static' directory
  app.get('/uploads', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'uploads'));
  });
  app.get('/linkedin', (req, res) => {
    const linkedinURL = 'https://www.linkedin.com/in/artem-ryzhov-90560a2a0/';
    res.redirect(linkedinURL);
  });
  
  
  // Middleware to parse incoming request bodies
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // Route to handle form submissions
  app.post('/submit', async (req, res) => {
    try {
      const { name, email } = req.body;
      const existingUser = await Usersubmit.findOne({ email });
  
      if (existingUser) {
        // Set a cookie with the user's name if they already exist
        res.cookie('username', existingUser.name, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
        return res.status(409).send('User already exists');
      }
  
      const user = new Usersubmit({ name, email });
      await user.save();
  
      // Set a cookie with the user's name upon successful submission
      res.cookie('username', user.name, { maxAge: 7 * 24 * 60 * 60 * 1000, httpOnly: true });
      return res.status(200).send('Data saved successfully');
    } catch (error) {
      console.error("Error saving data to database:", error);
      return res.status(500).send('Error saving data to the database');
    }
  });
  
  // Example route to display personalized message
  app.get('/welcome', (req, res) => {
    const username = req.cookies.username;
    if (username) {
      res.send(`Hey, ${username}! Welcome back!`);
    } else {
      res.send('Welcome, guest!');
    }
  });
  
  
      
      
      
  
  
  // Route to fetch user data and render usersTable.html
  app.get('/users', async (req, res) => {
    try {
        // Fetch all user data from MongoDB
        const users = await User.find({});
        
        // Render the usersTable.html file and pass user data to it
        res.sendFile(path.resolve(__dirname, 'usersTable.html'), { users });
    } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).send('Error fetching user data');
    }
  });
  
  // Route to serve usersTable.html
  app.get('/usersTable', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'usersTable.html'));
  });
  
  // Route to serve message.html
  app.get('/message.html', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'message.html'));
  });
  
  
 
  
  
  
  
  app.set('views', path.join(__dirname, 'views')); // Set the directory for views
  app.set('view engine', 'ejs'); // Set EJS as the view engine
  
  
  app.get('/fetch-and-render', async (req, res) => {
    try {
        // Fetch data from MongoDB using Mongoose model
        const data = await Usersubmit.find({});
  
        // Render the userTable.html page with the retrieved data
        res.render('users', { data }); // Assuming your EJS file is named 'users.ejs'
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).send('Error fetching data');
    }
  });
  // Start server for general routes
  app.listen(PORT + 1, '0.0.0.0', () => {
    console.log(`General Routes Worker running on port ${PORT + 1} (PID: ${process.pid})`);
});
  }
  }