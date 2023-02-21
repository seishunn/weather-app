import React, {useCallback} from 'react';
import {createMapPath} from "../../../utils/createMapPath";
import cl from "./MapBlock.module.scss";

interface IMapBlock {
    location: {
        lat: number
        lon: number
    }
}

const MapBlock: React.FC<IMapBlock> = ({location}) => {
    const mapPath = useCallback(() => createMapPath(location.lat, location.lon), [location.lat, location.lon]);
    return (
        <iframe
            className={cl.map}
            src={mapPath()}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"/>
    );
};

export default React.memo(MapBlock);
