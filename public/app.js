const postData = async ( url = '', data = {})=>{
    console.log(data, "данные с фронта");
      const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(data), 
    });

      try {
        const newData = await response.json();
        console.log(newData, 'вызов из postData');
        return newData;
      }catch(error) {
      console.log("error", error);
      }
  }

postData('/addMovie', {movie:'The Matrix', score: 5});
postData('/addMovie', {movie:'The NonMatrix', score: 5.5});

const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=5b48b5ac884461bd4e3f64a246fb35d7'
const token = '5b48b5ac884461bd4e3f64a246fb35d7'

function getWeatherData(id, ){

}

const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
console.log(fetchPromise);

const fetchPromise2 = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
  console.log(response);
});

const fetchPromise3 = fetch("https://ghibliapi.herokuapp.com/people");
fetchPromise.then(response => {
  return response.json();
}).then(people => {
  console.log(people);
});