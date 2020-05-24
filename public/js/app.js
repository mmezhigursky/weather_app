
//create global var to get date  

let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1; //As January is 0.
let yyyy = today.getFullYear();
let day_today = dd+'-'+mm+'-'+yyyy;


//create post function for processing post requests 
const postData = async ( url = '', data = {})=>{
  console.log(data);
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
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}

//create click listener for calling chain of functions  
document.getElementById('generate').addEventListener('click', getWeatherData);


//main function with chain of functions
async function getWeatherData(){
  let city =  document.getElementById('city').value;
  let feelings =  document.getElementById('feelings').value;
  let pattern = /\d/;
  if(city===""){
    alert("You didn't fill fields, fields were filled by default values.");
    document.getElementById('city').value = 94040;
    if(feelings ===""){
      document.getElementById('feelings').value = 'I feel good';
      return
    }
    return
  }
  else if(feelings ===""){
    document.getElementById('feelings').value = 'I feel good';
    return
  }
  try {
    const dataFrom = getDataAPI(city).then(function(dataFrom){
    console.log('dataFrom:', dataFrom);
    if(dataFrom.message === 'city not found'){
      document.getElementById('error').innerHTML = 'error = city not found';
      document.getElementById('temp').innerHTML = '';
      document.getElementById('date').innerHTML = '';
      document.getElementById('content').innerHTML = '';
      document.getElementById('zip').innerHTML = '';
    }
    else{
      document.getElementById('error').innerHTML = '';
      postData('/addWeatherData', {temp:dataFrom.main.temp, day:day_today, feel:feelings, zip:city});
      UpdateUI();
    } });
    
  } catch (error) {
    alert(error)
  }

}


//function for getting data from openweathermap
const getDataAPI = async (city)=>{
const token = '5b48b5ac884461bd4e3f64a246fb35d7';
let baseURL = `http://api.openweathermap.org/data/2.5/weather?zip=${city}&appid=${token}`;
console.log('конечный урл', baseURL);

const res = await fetch(baseURL);
try {
  const data = await res.json();
  return data;
} catch (error) {
  console.log("error", error);
}
};


//function for updating UI
const UpdateUI = async () =>{
  const getBackData = await fetch('/journalWeather');
  try {
    const data = await getBackData.json();
    console.log("Data from server", data);
    
    document.getElementById('temp').innerHTML = 'Temp = '+data.temp;
    document.getElementById('date').innerHTML = 'Date = '+ data.day;
    document.getElementById('content').innerHTML = 'How you feel = '+ data.feel;
    document.getElementById('zip').innerHTML = 'City = '+ data.zip;


    return data;
  } catch (error) {
    console.log("error", error);
  }
}

