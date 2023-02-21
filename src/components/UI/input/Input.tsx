import React from 'react';
import cl from "./Input.module.scss";

export interface IInput {
    value: string
    changeValue: (str: string) => void
    type: string
    title: string
}

const Input: React.FC<IInput> = ({value, changeValue, type, title}) => {
    return (
        <div className={cl.input}>
            <input type={type} value={value} onChange={event => changeValue(event.target.value)}/>
            <div className={`${cl.input_title} 
                ${value && cl.input_title__active}`
            }>{title}</div>
        </div>
    );
};

export default React.memo(Input);
