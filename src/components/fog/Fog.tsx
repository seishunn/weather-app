import React from 'react';
import cl from "./Fog.module.scss";

const Fog = () => {
    return (
        <div className={cl.fogwrapper}>
            <div id={cl.foglayer_01} className={cl.fog}>
                <div className={cl.image01}/>
                <div className={cl.image02}/>
            </div>
            <div id={cl.foglayer_02} className={cl.fog}>
                <div className={cl.image01}/>
                <div className={cl.image02}/>
            </div>
            <div id={cl.foglayer_03} className={cl.fog}>
                <div className={cl.image01}/>
                <div className={cl.image02}/>
            </div>
        </div>
    );
};

export default Fog;
