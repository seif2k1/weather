import React, { useEffect, useState } from 'react'
import "./Header.css"
import {PiWindBold} from "react-icons/pi";
import {WiHumidity} from "react-icons/wi";
import {AiOutlineSearch} from "react-icons/ai";
import Now from './left-top/Now';
import NextDays from './left-bottom/NextDays';
import DayInfo from './middle-top/DayInfo';
import DayDetails from './middle-bottom/DayDetails';
import Navbar from './navbar/Navbar';
const Weather = () => {
    //put ifno api in values
    const [values,setValue] = useState([]);
    //hadnle changing input values and initial state api
    const [country,setCountry] = useState("algeria");
    //get info about current from api 
    const [current,setCurrent] = useState([]);
    //get info about airquality from api 
    const [air,setAir] = useState([]);
    //get icon from api
    const [icon,setIcons] = useState([]);
    //get info about forecast from api
    const [forecast,setForecast] = useState([]);
    //for useEffect
    const [seif,setSeif] =useState([]) ;
    //houres
    const [hour,setHour] = useState([]);
    //
    const [nextDays,setNextDays] = useState([]);
    useEffect(()=>{
        fetch(`https://api.weatherapi.com/v1/forecast.json?key=eba0ed9a2c91486d909165655232306&q=${country}&days=5&aqi=yes&alerts=no`)
        .then(res => res.json())
        .then(data => {return(setValue(data.location),setCurrent(data.current),setIcons(data.current.condition),setForecast(data.forecast.forecastday[0].astro),setAir(data.current.air_quality),setHour(data.forecast.forecastday[0].hour),setNextDays(data.forecast.forecastday))})
        .catch(err => console.log(err))
    },[seif])
    
    const handleSubmit = (e) =>{
        e.preventDefault();
        setSeif(country);
    }
    const handleClick = ()=>{
      return country.length > 0 ? "seif":alert("Error: Invalid Country");
    }
    const timing = ()=>{
      const date = new Date();
      const option = {weekday:'long',day:'numeric',month:'long'};
      const format = new Intl.DateTimeFormat('en-US',option).format(date);
      return format; 
    }
  return (
    <div className="content">
      <Navbar handleSubmit={handleSubmit} value={country} onchange={setCountry} logo={<AiOutlineSearch  /> } handleClick={handleClick} />
      <div className="items">
      <div className='left'>
      <Now hour={hour}  timing={timing} airquality={icon}  country={values.country} city={values.region}  />
      <NextDays nextday={nextDays}/>
      </div>
      <div className="right">
      <DayInfo airquality={icon} current={current} air={air} forecast={forecast} />
      <DayDetails  hour={hour}/>
      </div>
      </div>

    </div>
  )
}

export default Weather