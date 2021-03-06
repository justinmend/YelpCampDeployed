# YelpCamp
Yelp for Campgrounds. A web application where you can rate and review campgrounds from all over the world. A YelpCamp clone with my own modifications. A fun project I tackled in "The Web Developer Bootcamp" for the purpose of learning web development, specifically to learn CRUD and REST.

# Installing Dependencies
- Make sure to install the required packages to properly run the application.
  - To do that, after cloning this repository, go inside the folder by executing "$cd YelpCampDeployed". You should be able to see the "package.json" file.
  - Once you find it, in the terminal, type "$ npm install". This will install all the required dependencies.

# Installing Node.js
- This application uses Node.js as the server platform.

### Installing Node.js on Mac OS X
- To download Node.js, visit https://nodejs.org/en/download/ and download the pre-built installer "macOS Installer (.pkg)".
  -  Once you've download the installer, run the installer and follow the instructions provided by the installer.
  - Once you have Node.js installed, you can now run the application.
  - To do that, go into the folder containing the "app.js" file.
  - Then, execute "$ node app.js". This will run the application.
- *NOTE: Make sure you have the MongoDB service running before running the application.

# Installing MongoDB
- This application uses MongoDB for it's database.

### Installing MongoDB on Mac OS X
- Go to https://www.mongodb.com/download-center#community and download the right archive version for your system, unpack the archive file, and move the folder to your desired location.
  - Then, in the terminal, execute "$ sudo mkdir -p /data/db".
  - Next, execute "$ sudo chown -R $USER /data/db".
  - In order to run the mongod service, go to the bin folder of the archive you downloaded in the terminal and execute "$ ./mongod". This will run the MongoDB service.

# Running and Testing the application on Localhost
- You can run and test the application on local host by going to http://localhost:3001/.
- Make sure you have mongoDB service running first and also have the application executed with "$ node app.js" in the terminal.
