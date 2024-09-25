# Node.js Cluster Module Showcase

This small project demonstrates the use of **Cluster** in Node.js, which is particularly useful in handling highly intensive applications. The simplest pattern to distribute the load of an application across different instances running on a single machine is by using the **Cluster** module, which is part of Node.js core libraries.

The **Cluster** module simplifies the forking of new instances of the same application and automatically distributes incoming connections across them. This allows load balancing without the need for external proxy servers (like Nginx) by distributing the load purely with Node.js.

## Project Overview

In this showcase, the **Cluster** module is used to balance the load between a React application (`/basis-react-app`) and other static files (including an Angular app). 

By utilizing **Cluster**, if the React application experiences high load, it won't affect the rest of the functionality on the server.

### Features
- **Cluster module** is used to spread the loading between the React application and other static files.
- **No need for external load balancers** like Nginx.
- **Separate workers** handle different parts of the application, ensuring smooth operation even under high load.
  
In future versions, I plan to add **testing** and **error handling** for different situations involving this pattern.

## How to Start the Project

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the project:

   ```bash
   node indexm2
   ```

## Available Routes

- React application:  
  [http://127.0.0.1:3000/basis-react-app/](http://127.0.0.1:3000/basis-react-app/)

- Other static files (served on a separate worker):
  - [http://127.0.0.1:3001/index.html](http://127.0.0.1:3001/index.html)
  - [http://127.0.0.1:3001/profile.html](http://127.0.0.1:3001/profile.html)
  - [http://127.0.0.1:3001/angular17/](http://127.0.0.1:3001/angular17/)

- Other routes (including `/uploads`):  
  *Please note: `/uploads` is fetched from my real site, not localhost, and is only relevant if you're using the Angular app from `profile.html`.*

### Note:
This is a simplified version of my full site. I did not include the connection to **MongoDB Atlas Cluster** for privacy reasons.
