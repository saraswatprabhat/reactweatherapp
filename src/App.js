import './App.css';
import React, { useEffect, useState } from "react";
import { getWeatherData } from './components/api';
import ReactVirtualizedTable from './components/Reacttable';
import {
  BrowserRouter,
  Switch,
  Route,
  Routes
} from "react-router-dom";
import Header from './components/Header';



export default function App() {

  

  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);
  const [temp, setTemp] = useState(null);
  const [windsp, setWindsp] = useState(null);
  const [humd, setHumd] = useState(null);
  
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });

    // console.log("Utkarsh your lat is " , lat);
    
  }, []);

  useEffect(() => {    
   lat && long &&  getWeatherData(lat,long).then((res) => {
          
    console.log(res.data);
    
    

    setTemp(Math.floor(res.data.main.temp-273))
    setWindsp(res.data.wind.speed)
    setHumd(res.data.main.humidity)
    console.log(res.data)
    
  })
      },[lat,long])



 



  

  return (
    <div className='App'>
        
      <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Header temp={temp} windsp={windsp} humd={humd} />}></Route>
        <Route exact path="/table" element={<ReactVirtualizedTable />} ></Route>
      </Routes>
      
      </BrowserRouter>
     
    </div>
  );
}

