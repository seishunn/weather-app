import React from 'react';
import cl from "./TemperatureBlock.module.scss";
import SectionBlock from "../UI/sectionBlock/SectionBlock";
import SearchInput from "../UI/searchInput/SearchInput";

interface ITemperatureBlock {
    temperature: number
    description: string
    location: {
        country: string
        name: string
    }
    date: string
    weather_icon: string
    searchQuery: string
    setSearchQuery: (str: string) => void
}

const TemperatureBlock: React.FC<ITemperatureBlock> = ({temperature, date, location, description, weather_icon = "", searchQuery= "", setSearchQuery}) => {
    const calendar = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path></svg>;
    const label = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path><path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path></svg>;


    return (
        <SectionBlock>
            <div className={cl.temperatureBlock}>
                <SearchInput value={searchQuery} changeValue={setSearchQuery}/>
                <div className={cl.image}>
                    <div className={cl.image_block}>
                        {weather_icon && <img src={weather_icon} alt=""/>}
                    </div>
                </div>
                <div className={cl.temperatureBlock_info}>
                    <div className={cl.temperature}><span>{temperature}</span><span className={cl.celsius}>°C</span></div>
                    <div className={cl.description}>{description}</div>
                </div>
                <div className={cl.temperatureBlock_footer}>
                    <div className={cl.temperatureBlock_footer_item}>{label}{location.name}, {location.country}</div>
                    <div className={cl.temperatureBlock_footer_item}>{calendar}<span>{new Date(date).toLocaleDateString("en-US")}</span><span className={cl.time}>{new Date(date).toLocaleTimeString("en-IT", {hour: '2-digit', minute:'2-digit'})}</span></div>
                </div>
            </div>
        </SectionBlock>
    );
};

export default React.memo(TemperatureBlock);
