const express = require("express");

const app = express();

//this will fire our mongoose.connect statement to initialize our database connection

require("./server/config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

//this is where we import the jokes routes function from our jokes.routes.js file

const allMyJokeRoutes = require("./server/routes/jokes.routes");
allMyJokeRoutes(app);

app.listen(8000, () => console.log("The server is fired up and waiting on port 8000"));

