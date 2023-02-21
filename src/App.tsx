import React from 'react';
import "./App.css"
import {Main} from "./components/main/Main";
import Rain from "./components/rain/Rain";
import Snowfall from "./components/snowfall/Snowfall";
import Fog from "./components/fog/Fog";
import {useAppSelector} from "./hooks/redux";
import {searchInString} from "./utils/searchInString";

function App() {
    const weather = useAppSelector(state => state.weather.current);
    const weather_text = weather.condition?.text;

    return (
        <div className="App">
            <Main/>
            {searchInString(weather_text, ["rain", "drizzle"]) && <Rain/>}
            {searchInString(weather_text, ["snow", "sleet", "blizzard", "pellets"]) && <Snowfall/>}
            {searchInString(weather_text, ["mist", "fog"]) && <Fog/>}
        </div>
    );
}

export default App;
