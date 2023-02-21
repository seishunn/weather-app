import React from 'react';
import cl from "./WeatherForecast.module.scss";
import {temperatureBeauty} from "../../../utils/temperatureBeauty";

interface IWeatherForecast {
    image: string
    temperature: number
    temperatureDop: number
    date: string
}

const WeatherForecast: React.FC<IWeatherForecast> = ({temperature, temperatureDop, date, image= ""}) => {
    const localDate = new Date(date);
    let localTemperature: string = temperatureBeauty(temperature);
    let localTemperatureDop: string = temperatureBeauty(temperatureDop);

    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return (
        <div className={cl.weather}>
            <div className={cl.weather_inner}>
                <div className={cl.image}>
                    {image && <img src={image} alt=""/>}
                </div>
                <div className={cl.temperature}>
                    <span className={cl.main}>{localTemperature}°/</span>
                    <span className={cl.dop}>{localTemperatureDop}</span>
                </div>
                <div className={cl.date}>
                    <span>{`${localDate.getDate()} ${localDate.toLocaleString('en', {month: 'long'})}`}</span>
                </div>
                <div className={cl.dayOfTheWeek}>
                    <span>{days[localDate.getDay()]}</span>
                </div>
            </div>
        </div>
    );
};

export default React.memo(WeatherForecast);
