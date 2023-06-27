import React from 'react'
import {PiWindBold} from "react-icons/pi"
import {WiSunrise} from "react-icons/wi"
import {BsMoonStars} from "react-icons/bs"


import {WiHumidity} from "react-icons/wi"
import {GiPressureCooker} from "react-icons/gi"
import {MdOutlineVisibility} from "react-icons/md"
import {LiaTemperatureLowSolid} from "react-icons/lia"

import './DayInfo.css'
const DayInfo = ({airquality,current,air,forecast}) => {
  return (
    <div className='DayInfo'>
      <h5>Todays HightLights</h5>
      <div className="daysItems">
      <div className='items-1'>
        <div className='air-name'>
          <h4>Air Quality Index</h4>
        </div>
        <div className='air-info'>
          <PiWindBold size={35} />
          <div>
            <h6>PM25</h6>
            <h3>{air.pm2_5}</h3>
          </div>
          <div>
            <h6>SO2</h6>
            <h3>{air.so2}</h3>
          </div>
          <div>
            <h6>NO2</h6>
            <h3>{air.no2}</h3>
          </div>
          <div>
            <h6>O3</h6>
            <h3>{air.o3}</h3>
          </div>
        </div>
      </div>
      <div className='items-1'>
        <h4>Sunrise & Sunset</h4>
        <div className='riseSet'>
          <div className='sunrise'>
            <WiSunrise size={65} fill='white'/>
            <div className="sunrise-info">
            <h4>Sunrise</h4>
            <h3>{forecast.sunrise}</h3>
            </div>
          </div>
          <div className='sunset'>
            <BsMoonStars size={40} fill='white' />
            <div className="sunset-info">
            <h4>sunSet</h4>
            <h3>{forecast.sunset}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className='items-2'>
        <h3>Humidty</h3>
        <div className='hudimity'>
          <WiHumidity size={35} fill='white' />
          <h4>{current.humidity} %</h4>
        </div>
      </div>
      <div className='items-2'>
        <h3>Pressure</h3>
        <div className='pressure'>
          <GiPressureCooker size={35} fill='white' />
          <h4>{current.pressure_mb} hPa</h4>
        </div>
      </div>
      <div className='items-2'>
        <h3>Visibility</h3>
        <div className='visibility'>
          <MdOutlineVisibility size={35} fill='white'/>
          <h4>{current.vis_km} KM</h4>
        </div>
      </div>
      <div className='items-2'>
        <h3>Feels Like</h3>
        <div className='fell'>
          <LiaTemperatureLowSolid size={35} fill='white'/>
          <h4>{current.feelslike_c} °C</h4>
        </div>
      </div>
      </div>
    </div>
  )
}

export default DayInfo