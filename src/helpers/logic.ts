import axios from "axios";
import { IWeather } from '../types/weather';

export async function fetchWeather(location: string, setDataWeather: any) {
    try {
      await axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&key=X4JN7SMRTYF7GE894UYD32AFL&contentType=json`)
      .then(response => setDataWeather(filteredWeather(response.data.currentConditions)))
      // .then(response => console.log(response.data.currentConditions))
    } catch (error) {
      alert("Something went wrong(((");
    }
};

const filteredWeather = (response: any): IWeather => {
    const { humidity, icon, temp, windspeed, sunrise, sunset, conditions } = response;
    return { humidity, icon, temp, windspeed, sunrise, sunset, conditions };
};