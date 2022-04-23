# Web-and-Mobile-Application

#Web Application
Developing Basic web application using frontend & Backend language and a database.
This project uses the MEAN stack:

Mongoose.js (MongoDB): database
Express.js: backend framework
Angular.js: frontend framework
Node.js: runtime &backend  environment
Bcrypt.js: password encryption
Prerequisites
Install Node.js and MongoDB
Install Angular CLI: npm i -g @angular/cli
The structure of the Project 
I've split the login and registration pages out from the angular application in order to secure access to the angular client files, so all front end angular files (including javascript, css, images etc) are only available to authenticated users.

It's also possible to include the login and registration pages within the angular application and allow public access.

The express js application is structured using an MVC-ish pattern, there are controllers and views but rather than models I've gone with a services layer for data access & business logic. The services use mongoskin as the mongodb driver, it's a thin wrapper for the native mongodb driver that provides a simpler interface for performing CRUD operations.

Production mode
npm run prod: run the project with a production bundle listening at localhost:3000

Project Setup
Run the command 'npm install' from the project root folder (where the package.json file is located) to download all node package dependencies.

Then run 'node server.js'  npm start from the same location to start the web server and browse to http://localhost:3000 to access the application.

#Mobile Application
Developing Basic Mobile application using frontend & Backend language and a database.
MYSQL: database
ReactNative: frontend framework
Node.js: runtime &backend  environment

To install the following components, please follow the React Native guide for your platform

Android >= 8.1
Node >= 11.10.1
React Native Debugger
yarn (>1.16.0)
React Native >= 0.61

Environment setup
Follow the steps of the official React Native documentation to setup your development environment. Since we are using native modules, we need to follow the React Native CLI Quickstart guide.
run npm start on the mobile directory and the frontend app will start running on port 3000. Then, proceed to use a virtual or real device to test how it communicates with the backend.

Preview (videos) of web application and Mobile application:
https://user-images.githubusercontent.com/98037275/164861483-e346fdbb-d975-4a75-902d-8fa74a805aa0.mp4

https://user-images.githubusercontent.com/98037275/164861753-6acf3084-6575-4c18-aa47-fd212448f464.mp4

