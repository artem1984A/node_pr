This small project show case of using Cluster in Node.js, which (so Node.js),
as well  in charge in highly intensive application.
So the simplest pattern to distribute the load of an application across
different instances running on a single machine is by using the cluster module,
which is part of the core libraries. The cluster module simplifies the forking of new
instances of the same application and automatically distributes incoming connections
across them.
This let us even not using proxy servers (like Nginx and so on) 
distribute the loading process in purely Node.js .
In this showcase i am just used Cluster for spred loading React application
(/base-react-app) and the rest of static
files (and angular app including),
because in case if React application can be in high charg it not affect the rest of the functionality.
In the next version of this project i will show testing and error handeling for different situation of this pattern.
So now, to start project:
------

npm install

node indexm2
------
And for routes:
http://127.0.0.1:3000/basis-react-app/

http://127.0.0.1:3001/index.html
http://127.0.0.1:3001/profile.html
http://127.0.0.1:3001/angular17/
and the rest...
---------


and the rest (but /uploads route will be fetched from my real site,
not localhost and just in case if you use angular app from projects in profile.html)

Its like cutted version of my site (i am not used here React app with Mongo.DB
because of privacy link to MongoDB Atlas Cluster).
