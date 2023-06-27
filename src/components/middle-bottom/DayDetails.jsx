import React from 'react'
import './daydetails.css'
const DayDetails = ({hour}) => {
  const convert = (time)=>{
    const dateString = time;
    const date = new Date(dateString);
    const timeString = date.toLocaleTimeString([],{hour:'2-digit'});
    return timeString;
  }
  convert();
  return (
    <div className="hours-title">
      <h3>Today At</h3>
      <div className='hours-details'>
      {hour.map((ele,index)=>{
        return(
          <div key={index}>
            <h3>{convert(ele.time)}</h3>
            <img src={ele.condition.icon} alt="seif" />
            <h3>{ele.temp_c} °C</h3>
          </div>
        )
      })}
      </div>
    </div>
  )
}

export default DayDetails