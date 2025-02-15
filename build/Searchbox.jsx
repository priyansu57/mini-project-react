import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css'
import { useState } from 'react';

export default function Searchbox({updateInfo}){
    
      let[ city , setCity ] = useState("")
      let [error , seterror] = useState(false)

      let APP_URL = "https://api.openweathermap.org/data/2.5/weather";
      let APP_KEY = "f016fc2ef494e08250c16138ba6e6feb";
       

      let getWeatherInfo =  async () =>{
    try{
        let response = await  fetch(`${APP_URL}?q=${city}&appid=${APP_KEY}&units=metric`);
          let jsonResponse = await response.json();
          console.log(jsonResponse.main);

          let result = {
            city : city,
            temp : jsonResponse.main.temp,
            Temp_max : jsonResponse.main.temp_max,
            Temp_min : jsonResponse.main.temp_min,
            Humidity : jsonResponse.main.humidity,
            Feels_like : jsonResponse.main.feels_like,
            Sea_level : jsonResponse.main.sea_level,
            Pressure: jsonResponse.main.pressure,
            Weather : jsonResponse.weather[0].description,
            Wind_speed : jsonResponse.wind.speed,
          }
          console.log(result);
          
          return result
        }catch(error){
            throw error
        }
      }


      let handlecity =  (event) => {
        setCity(event.target.value)
      }
      
      let handleform = async (event) => {
       try{ 
        event.preventDefault();
        console.log(city);
        setCity("");
      let newInfo =  await getWeatherInfo()
      updateInfo(newInfo);
       }catch(error){
        seterror(true)
       }
      }

    return (
        <div className="search">
            <h1> Search for the weather!!</h1>
          <form onSubmit={handleform}> 
                <TextField id="City" label="City Name" variant="outlined" value={city} onChange={handlecity} required/>
                <br /> <br />
                <Button variant="contained" size="medium" type='submit'>
                    SEARCH
                </Button>
                {error && <p style={{color : "red"}}>{"The Detail's was not validate "}</p> }
          </form>   
        </div>
    )
}