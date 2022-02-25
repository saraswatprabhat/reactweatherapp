import React from 'react';
import './../App.css';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { minWidth } from '@mui/system';
import { getWeatherData } from './api';







  












const bull = (
    <Box
      component="span"
      sx={{ display:'50%', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

export default function Header({temp,windsp,humd}) {



  return <>
  <div className="App">
    <center>
      <style>{'body { background-color: #ADD8E6; }'}</style>
      <h1>Welcome to the weather app</h1>
      <div>
     <Card sx={{ maxWidth:'50%' , backgroundColor: "#A8C9F5"   }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Your Location is New Delhi
        </Typography>
        <Typography variant="h5" component="div">
         Temperature is : {temp} deg
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Wind speed is  {windsp} Km/hr
        </Typography>
        <Typography variant="body2">
          
          <br />
          Humidity : {humd} %
        </Typography>
      </CardContent>
      
    </Card>
     </div></center>
    </div>
      </>
}
