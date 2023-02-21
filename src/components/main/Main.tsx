import React, {useCallback, useEffect, useMemo, useState} from 'react';
import cl from "./Main.module.scss";
import TemperatureBlock from "../temperatureBlock/TemperatureBlock";
import SectionBlock from "../UI/sectionBlock/SectionBlock";
import MiniSectionBlock from "../UI/miniSectionBlock/MiniSectionBlock";
import DayTimeBar from "../dayTimeBar/DayTimeBar";
import MiniInfoBlock from "../UI/miniSectionBlock/miniInfoBlock/MiniInfoBlock";
import MapBlock from "../UI/mapBlock/MapBlock";
import ForecastBlock from "../forecastBlock/ForecastBlock";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {getWeather} from "../../actions/weather";
import {debounceFn} from "../../utils/debounceFn";
import {useChildren} from "../../hooks/useChildren";
import InfoAndSvg from "../UI/infoAndSvg/InfoAndSvg";

export const Main = () => {
    const dispatch = useAppDispatch();
    const weather = useAppSelector(state => state.weather.current);
    const location = useAppSelector(state => state.weather.location);
    const forecast = useAppSelector(state => state.weather.forecast);
    const [forecastCount, setForecastCount] = useState("7");
    const [searchQuery, setSearchQuery] = useState("");

    const optionsArray = useMemo(() => [
        {value: "3", text: "3 day"},
        {value: "7", text: "7 day"},
        {value: "14", text: "14 day"},
    ], []);

    useEffect(() => {
        dispatch(getWeather(searchQuery, Number(forecastCount)));
    }, [forecastCount]);

    const weatherResponse: (str: string, count: number) => void = useCallback(debounceFn((str: string, count: number) => {
        dispatch(getWeather(str, count));
    }, 1000), []);

    const searchQueryFN = (str: any) => {
        setSearchQuery(str);
        weatherResponse(str, Number(forecastCount))
    }

    const childrenMoonRise = useChildren(<DayTimeBar
        dayInfo={forecast.forecastday[0]?.astro!}
        moonTime={true}
        currentTime={location.localtime}
    />, [location.localtime, forecast.forecastday[0]?.astro.moonrise]);
    const childrenSunRise = useChildren(<DayTimeBar
        dayInfo={forecast.forecastday[0]?.astro!}
        currentTime={location.localtime}
    />, [location.localtime, forecast.forecastday[0]?.astro.sunrise])
    const childrenHumidity = useChildren(
        <MiniInfoBlock
            mainText={weather.humidity}
            mainTextSign={"%"}
            description={`The dew point is ${forecast.forecastday[0]?.hour[0]?.dewpoint_c}° right now`}
            svg={"drop"}
        />, [location.name]);
    const childrenVisibility = useChildren(
        <MiniInfoBlock
            mainText={weather.vis_km}
            mainTextSign={"km"}
            description={"Haze is affecting visibility"}
            svg={"eye"}
        />, [location.name]);
    const childrenFeelsLike = useChildren(
        <MiniInfoBlock
            mainText={`${weather.feelslike_c}°`}
            mainTextSign={""}
            description={"Humidity is making it feel hotter"}
        />, [location.name]);


    const addressInfo = useMemo(() => location, [location.name]);

    return (
        <div className={cl.main}>
            <div className={cl.container}>
                <TemperatureBlock
                    temperature={weather.temp_c}
                    description={weather.condition.text}
                    date={location.localtime}
                    weather_icon={weather.condition.icon}
                    location={addressInfo}
                    searchQuery={searchQuery}
                    setSearchQuery={searchQueryFN}
                />
                <SectionBlock>
                    <div>
                        <div className={cl.title}>Today's Highlight</div>
                        <div className={cl.grid}>
                            <MiniSectionBlock title={"Sunrise & Sunset"}>
                                {childrenSunRise}
                            </MiniSectionBlock>
                            <MiniSectionBlock title={"Moonrise & Moonset"}>
                                {childrenMoonRise}
                            </MiniSectionBlock>
                            <MiniSectionBlock title={"Useful description"}>
                                <div className={cl.info_block_grid}>
                                    <InfoAndSvg
                                        mainInfo={forecast.forecastday[0]?.day.daily_chance_of_rain!}
                                        mainInfoSign={"%"}
                                        category={"rain"}
                                        svg={"rain"}
                                        willHappen={!!forecast.forecastday[0]?.day.daily_will_it_rain!}
                                    />
                                    <InfoAndSvg
                                        mainInfo={forecast.forecastday[0]?.day.daily_chance_of_snow!}
                                        mainInfoSign={"%"}
                                        category={"snow"}
                                        svg={"snow"}
                                        willHappen={!!forecast.forecastday[0]?.day.daily_will_it_snow!}
                                    />
                                    <InfoAndSvg
                                        mainInfo={weather.uv!}
                                        mainInfoSign={""}
                                        category={"UV index"}
                                        svg={"sun"}
                                    />
                                </div>
                            </MiniSectionBlock>
                            <MiniSectionBlock title={"Humidity"} mini={true}>
                                {childrenHumidity}
                            </MiniSectionBlock>
                            <MiniSectionBlock title={"Visibility"} mini={true}>
                                {childrenVisibility}
                            </MiniSectionBlock>
                            <MiniSectionBlock title={"Feels like"} mini={true}>
                                {childrenFeelsLike}
                            </MiniSectionBlock>
                        </div>
                    </div>
                </SectionBlock>
                <ForecastBlock
                    forecast={forecast}
                    forecastCount={forecastCount}
                    setForecastCount={setForecastCount}
                    optionsArray={optionsArray}
                />
                <MapBlock location={addressInfo}/>
            </div>
        </div>
    );
};