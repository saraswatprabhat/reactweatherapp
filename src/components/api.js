import React from 'react';
import App from '../App';

const axios = require('axios');

const getWeatherData = (lat, long) => {
    console.log("your lat is " , lat);
    return axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+lat+ "&lon="+long+"&appid=2e317e98d2a13b7e004a2bb3dd5a5f32")
  };

export {getWeatherData};


//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=bbc59679a38b7aa23fac1f64cd0a288f