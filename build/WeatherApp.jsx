import Searchbox from './Searchbox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherApp(){

    let [weather , setweather ] = useState({
        city : "Wanderlust",
        temp : 16.05,
        Temp_max : 16.05,
        Temp_min : 16.05,
        Humidity : 55,
        Feels_like : 15.15,
        Sea_level : 1017,
        Pressure: 1017,
        Weather : "haze",
        Wind_speed : 4.63,
    });

    let updateInfo = (newresult) => {
        setweather(newresult);
    }
    
    return(
      <>
       <Searchbox updateInfo={updateInfo}/>
       <InfoBox result={weather}/>
      </>
    )
}