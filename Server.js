// Загружаем HTTP модуль
const port = 8000;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
const cors = require('cors');
app.use(cors());

app.use(express.static('public'));

function listening(){
   console.log("server running"); 
   console.log(`running on localhost: ${port}`);
};

app.get('/', function (req, res) {
   res.sendFile(__dirname + '/index.html');
 });
const server = app.listen(port, listening);

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.post("/", urlencodedParser, function (request, response) {
   if(!request.body) return response.sendStatus(400);
   console.log(request.body);
   response.send(`${request.body.idCity} - ${request.body.Date}`);
});

const data = [];

app.post('/addMovie', addMovie);

function addMovie (req, res){
   data.push(req.body);
   console.log(data);
};