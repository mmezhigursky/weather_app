// declare global var for data collecting
projectData = {};

// connect express library 
const express = require("express");

// create instance of express
const app = express();

// connect body-parser library 
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// connect cors library 
const cors = require("cors");
app.use(cors());

// connect folder with static files
app.use(express.static("public"));

// declare port
const port = 8000;

const server = app.listen(port, listening);
function listening() {
  console.log(`sever is running at port: ${port}`);
}

// create route for POST and GET requests
app.post('/addWeatherData', addWeatherData);

function addWeatherData (req, res){
  console.log(req.body);
  projectData = req.body;
}

app.get('/journalWeather', journalWeather);

function journalWeather (req, res){
  res.send(projectData);
}