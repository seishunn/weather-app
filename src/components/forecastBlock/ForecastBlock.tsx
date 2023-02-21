import React from 'react';
import cl from "./ForecastBlock.module.scss";
import SelectBlock, {IOption} from "../UI/selectBlock/SelectBlock";
import WeatherForecast from "../UI/weatherForecast/WeatherForecast";
import SectionBlock from "../UI/sectionBlock/SectionBlock";
import {IForecast} from "../../reducers/weather-reducer";

interface IForecastBlock {
    forecastCount: string
    setForecastCount: (value: string) => void
    optionsArray: IOption []
    forecast: IForecast
}

const ForecastBlock: React.FC<IForecastBlock> = ({setForecastCount, forecastCount, optionsArray, forecast }) => {
    return (
        <SectionBlock>
            <div className={cl.title}><span>Forecast</span>
                <SelectBlock value={forecastCount} changeValue={setForecastCount} options={optionsArray}/>
            </div>
            <div className={cl.forecast_grid}>
                {forecast.forecastday.map(forecast => <WeatherForecast
                    key={forecast.date}
                    date={forecast.date}
                    temperature={forecast.day.maxtemp_c}
                    temperatureDop={forecast.day.mintemp_c}
                    image={forecast.day.condition.icon}
                />)}
            </div>
        </SectionBlock>
    );
};

export default React.memo(ForecastBlock);
