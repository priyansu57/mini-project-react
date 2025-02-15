
import './InfoBox.css'
import { ClassNames } from '@emotion/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function InfoBox ({result}){
    const INIT_URL = "https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAIN_URL = "https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1615226120487-90ec48f5d316?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
      <div className='InfoBox'>
      <br /> <br />
      <hr />
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 180 }}
          image={result.Humidity > 70 ? RAIN_URL : result.temp > 15 ? HOT_URL : COLD_URL }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           {result.city} {result.Humidity > 70 ? <ThunderstormIcon />: result.temp > 15 ? <WhatshotIcon /> : <AcUnitIcon />}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Humidity : {result.Humidity}</p>
            <p>Temprature : {result.temp}&deg;C</p>
            <p>Max_Temprature : {result.Temp_max}&deg;C</p>
            <p>Min_Temprature : {result.Temp_min}&deg;C</p>
            {/* <span style={{display : "flex"}}><p>Humidity : {result.Humidity}</p> &nbsp; &nbsp; &nbsp; <p>Sea_level : {result.Sea_level}</p></span>
            <p>Wind_speed : {result.Wind_speed}</p>
            <p> Pressure : {result.Pressure}Bar</p> */}
            <p>The weather can descibe as {result.Weather} feals like {result.Feels_like} </p>
            
          </Typography>
        </CardContent>
        
      </Card>
      </div>  
    </div>
    )
}