import React, {useState} from 'react';
import './App.css';
import axios from 'axios';

const App = () => {

  const url = `https://api.openweathermap.org/data/2.5/weather?q=kathmandu&appid={1584ff14e6e551b7bfef1023af262dc0}`;


  return (
    <div className='App'>
      <div className='container'>
        <div className='top'>
          <div className='location'>
            <p>Kathmandu</p>
          </div>
          <div className='time'>
            <p>20:30</p>
          </div>
          <div className='temp'>
            <h1>60F</h1>
          </div>
          <div className='description'>
            <p>Clouds</p>
          </div>
        </div>
        <div className='bottom'>
          <div className='feels'>
            <p>65F</p>
          </div>
          <div className='humidity'>
            <p>20%</p>
          </div>
          <div className='wind'>
            <p>12MPH</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App