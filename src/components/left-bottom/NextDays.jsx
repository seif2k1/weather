import React from 'react'
import "./days.css"
const NextDays = ({nextday}) => {
  const convertDay = (time)=>{
    const dateString = time;
    const date = new Date(dateString);
    const option = {day:'numeric',month:'long'};
    const format = date.toLocaleDateString('en-US',option);
    return format;
  }
  const convertDayName = (time)=>{
    const date = new Date(time);
    const option = {weekday:'long'};
    const format = new Intl.DateTimeFormat('en-US',option).format(date);
    return format;
  }
  return (
    <div className='days'>
        {nextday.map((ele,index)=>{
          if (index >= 1) {
            
          return(
        <div key={index}>
          <img src={ele.day.condition.icon} alt={ele.day.condition.text}  />
          <h6>{convertDay(ele.date)}</h6>
          <h6>{convertDayName(ele.date)}</h6>
        </div>
        )
      }
      })}
    </div>
  )
}

export default NextDays
