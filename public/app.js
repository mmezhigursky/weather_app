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

document.getElementById('main_btn').addEventListener('click', getWeatherData);
  




// postData('/addMovie', {movie:'The Matrix', score: 5});
// postData('/addMovie', {movie:'The NonMatrix', score: 5.5});




async function getWeatherData(){
  const city =  document.getElementById('city').value;
  const date =  document.getElementById('date').value;
  const dataFrom = getDataAPI(city).then(function(dataFrom){
    console.log('dataFrom:', dataFrom);
  });
}

 




const getDataAPI = async (city)=>{
  const token = '5b48b5ac884461bd4e3f64a246fb35d7';
  let baseURL = `https://api.openweathermap.org/data/2.5/forecast?id=${city}&APPID=${token}`;
  console.log('конечный урл', baseURL);

  const res = await fetch(baseURL);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log("error", error);
  }
};
 

  // const data =  res.json();
  // console.log(data, 'from API')
  // console.log(data)
  // return data;
  // console.log("error", error, error.message);
    // appropriately handle the error







// const fetchPromise = fetch("https://ghibliapi.herokuapp.com/people");
// console.log(fetchPromise);

// const fetchPromise2 = fetch("https://ghibliapi.herokuapp.com/people");
// fetchPromise.then(response => {
//   console.log(response);
// });

// const fetchPromise3 = fetch("https://ghibliapi.herokuapp.com/people");
// fetchPromise.then(response => {
//   return response.json();
// }).then(people => {
//   console.log(people);
// });


