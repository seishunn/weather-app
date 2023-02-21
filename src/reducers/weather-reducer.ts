import {createSlice} from "@reduxjs/toolkit";

interface ICondition {
    text: string
    icon: string
}

interface IWeather {
    condition: ICondition
    feelslike_c: number
    humidity: number
    is_day: number
    last_updated?: string
    vis_km: number
    pressure_in: number
    pressure_mb: number
    temp_c: number
    uv: number
    wind_dir: string
    wind_kph: number
}

interface IHour {
    chance_of_rain: number
    chance_of_snow: number
    time: string
    will_it_rain: number
    will_it_snow: number
    dewpoint_c: number
    condition: ICondition
    feelslike_c: number
    humidity: number
    is_day: number
    last_updated?: string
    pressure_in: number
    pressure_mb: number
    temp_c: number
    uv: number
    wind_dir: string
    wind_kph: number
}

interface IForecastday {
    astro: {
        is_moon_up: number
        is_sun_up: number
        moon_illumination: string
        moon_phase: string
        moonrise: string
        moonset: string
        sunrise: string
        sunset: string
    }
    date: string
    date_epoch: number
    day: {
        avghumidity: number
        avgtemp_c: number
        avgtemp_f: number
        avgvis_km: number
        avgvis_miles: number
        condition: ICondition
        daily_chance_of_rain: number
        daily_chance_of_snow: number
        daily_will_it_rain: number
        daily_will_it_snow: number
        maxtemp_c: number
        maxtemp_f: number
        maxwind_kph: number
        maxwind_mph: number
        mintemp_c: number
        mintemp_f: number
        totalprecip_in: number
        totalprecip_mm: number
        totalsnow_cm: number
    }
    hour: IHour[]
}

export interface IForecast {
    forecastday: IForecastday[]
}

interface IInitialStateProps {
    current: IWeather
    location: {
        country: string
        region: string
        name: string
        localtime: string
        lat: number
        lon: number
    },
    forecast: {
        forecastday: IForecastday[]
    }
}

const initialState: IInitialStateProps = {
    current: {
        condition: {
            text: "",
            icon: "",
        },
        feelslike_c: 0,
        humidity: 0,
        is_day: 0,
        last_updated: "",
        pressure_in: 0,
        pressure_mb: 0,
        temp_c: 0,
        uv: 0,
        wind_dir: "",
        wind_kph: 0,
        vis_km: 0,
    },
    location: {
        country: "",
        region: "",
        name: "",
        localtime: "",
        lat: 0,
        lon: 0
    },
    forecast: {
        forecastday: []
    }
};

export const weatherReducer = createSlice({
    name: "weatherReducer",
    initialState,
    reducers: {
        setWeather(state, action) {
            state.current = action.payload.current;
            state.location = action.payload.location;
            state.forecast = action.payload.forecast;
        }
    }
})

export default weatherReducer.reducer;