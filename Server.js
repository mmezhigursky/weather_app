// Загружаем HTTP модуль
const port = 8000;
const express = require('express');
const body_parser = require('body-parser')

function listening(){
   console.log("server running"); 
   console.log(`running on localhost: {$port}`);
}

const server = app.listen(port, listening);

