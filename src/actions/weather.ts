import axios from "axios";
import {AppDispatch} from "../reducers";
// Reducers
import {weatherReducer} from "../reducers/weather-reducer";
// Actions
const {setWeather} = weatherReducer.actions;

const API_KEY = "40df8345731847c38eb154612231202";

export const getWeather = (cityName: string, daysCount: number) => {
    return async (dispatch: AppDispatch) => {
        if (cityName) {
            const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}&days=${daysCount}&aqi=no&alerts=no`);
            dispatch(setWeather(response.data));
        }
    }
}