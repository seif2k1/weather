import React from 'react'
import "./Now.css"
import {AiOutlineCalendar} from "react-icons/ai"
import {BiCurrentLocation} from "react-icons/bi"
const Now = ({country,city,airquality,timing,hour}) => {
  
  const convertTime2 = () =>{
    const date = new Date();
    const rendHour = Math.floor(date.getHours()); 
    return rendHour;
  }
  const convertTime3 = (a) =>{
    const date = new Date(a);
    const rendHour = Math.floor(date.getHours()); 
    return rendHour;
  }
  return (
    <div className='now'>
      <div className='nowInfo'>
        <h3>Now</h3>
        <div>
          {hour.map((ele,i)=>{
            if(convertTime2() === convertTime3(ele.time)){
            return(
              <div key={i} className='nowInfoLogo'>
              <img src={ele.condition.icon} alt="seif" />
              <h3>{ele.temp_c} °C</h3>
              </div>
            )}
          })}
        </div>
          <h5>{airquality.text}</h5>
      </div>
      <hr />
      <div className='nowDetails'>
        <div className='day'>
          <AiOutlineCalendar size={30} fill="white"/>
          <h6>{timing()}</h6>
        </div>
        <div className='position'>
          <BiCurrentLocation size={30} fill="white"/>
          <h6>{country},{city}</h6>
        </div>
      </div>
    </div>
  )
}

export default Now