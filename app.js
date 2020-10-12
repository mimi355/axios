const express= require("express");
const app = express();
const axios=require("axios")

  const requestOne = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Nice&appid=36cf97a7345360498a692e1c5947d003&units=metric`);
  const requestTwo = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Bali&appid=36cf97a7345360498a692e1c5947d003&units=metric`);
  const requestThree = axios.get(`http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=36cf97a7345360498a692e1c5947d003&units=metric`);


  axios
  .all([requestOne, requestTwo, requestThree])
  .then(axios.spread((firstResponse, secondResponse, thirdResponse) => {
      console.log(firstResponse.data,secondResponse.data, thirdResponse.data);
    })
  )
  .catch(errors => {
    console.error(errors);
  });
 
app.listen(3000,()=>{ console.log("the server is running on port 3000")})