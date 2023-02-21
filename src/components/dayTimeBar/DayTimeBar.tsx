import React from 'react';
import cl from "./DayTimeBar.module.scss";
import {timePercent} from "../../utils/timePercent";
import {timeCompare} from "../../utils/timeCompare";

interface IDayTimeBarProps {
    dayInfo: {
        sunrise: string
        sunset: string
        moonrise: string
        moonset: string
    }
    moonTime?: boolean
    currentTime: string
}

const DayTimeBar: React.FC<IDayTimeBarProps> = ({dayInfo, moonTime = false, currentTime}) => {
    let percent = 0;
    if (dayInfo?.sunset && dayInfo.sunrise && dayInfo.moonset && dayInfo.moonrise) {
        if (moonTime) {
            percent = timePercent(dayInfo.moonrise, dayInfo.moonset, currentTime);
        } else {
            percent = timePercent(dayInfo.sunrise, dayInfo.sunset, currentTime);
        }
    }

    return (
        <div className={cl.dayTimeBar}>
            <div className={cl.dayTimeBar_bar}>
                <div className={cl.dayTimeBar_bar_block}>
                    <span className={moonTime ? cl.moonTime : cl.sunTime}/>
                    <span className={moonTime ? cl.moonTime : cl.sunTime}/>
                    <div className={cl.dot} style={{transform: `rotateZ(calc(1.8deg * ${percent}))`}}>
                        <span className={moonTime ? cl.dot_moonTime : cl.dot_sunTime}/>
                    </div>
                    <svg>
                        <circle cx="70" cy="70" r="100"/>
                        <circle cx="70" cy="70" r="100" style={{strokeDashoffset: `calc(314.5 - (629 * ${percent}) / 200 )`}} className={moonTime ? cl.moonTime_bar : cl.sunTime_bar}/>
                        <rect x="0" y="0" rx="0" ry="0" style={{width: `${percent}%`}} className={moonTime ? cl.moonTime_rect : cl.sunTime_rect}/>
                    </svg>
                </div>
            </div>
            <div className={cl.dayTimeBar_footer}>
                <div>
                    <div className={moonTime ? cl.title_moonTime : cl.title}>{moonTime ? "Moonrise" : "Sunrise"}</div>
                    <div className={cl.description}>{moonTime ? dayInfo?.moonrise : dayInfo?.sunrise}</div>
                </div>
                <div>
                    <div className={moonTime ? cl.title_moonTime : cl.title}>{moonTime ? "Moonset" : "Sunset"}</div>
                    <div className={cl.description}>{moonTime ? dayInfo?.moonset :dayInfo?.sunset}</div>
                </div>
            </div>
        </div>
    );
};

export default React.memo(DayTimeBar);
