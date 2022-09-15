
// import { useEffect, useState } from "react";
// import Apis from "./components/Apis";
import  Carousela from "./components/Carousel";
// import Fetching from "./components/Fetching";

const db = {
  "observation_time": "12:10 PM",
  "temperature": 30,
  "weather_code": 116,
  "weather_icons": [
  "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
  ],
  "weather_descriptions": [
  "Partly cloudy"
  ],
  "wind_speed": 9,
  "wind_degree": 270,
  "wind_dir": "W",
  "pressure": 1009,
  "precip": 0,
  "humidity": 17,
  "cloudcover": 25,
  "feelslike": 28,
  "uv_index": 8,
  "visibility": 10,
  "is_day": "yes"
  }

function App() {
  return (
    <>
      <Carousela data = {db}/>
      {/* <Fetching  data = {db}/> */}
      {/* <Apis /> */}
    </>
    
  );
}

export default App;
