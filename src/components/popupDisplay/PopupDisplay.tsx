import React from 'react';
import cl from "./PopupDisplay.module.scss";
import {ISearchInput} from "../UI/searchInput/SearchInput";
import Input from "../UI/input/Input";

const PopupDisplay: React.FC<ISearchInput> = ({value, changeValue}) => {
    return (
        <div className={cl.popup}>
            <div className={cl.popup_block}>
                <div className={cl.title}>City search</div>
                <Input value={value} changeValue={changeValue} title={"City name"} type={"text"}/>
            </div>
        </div>
    );
};

export default PopupDisplay;
