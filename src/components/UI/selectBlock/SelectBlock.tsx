import React from 'react';
import cl from "./SelectBlock.module.scss";

export interface IOption {
    value: string
    text: string
}

interface ISelectBlock {
    value: string
    changeValue: (value: string) => void
    options: IOption[]
}

const SelectBlock: React.FC<ISelectBlock> = ({changeValue, value, options}) => {
    return (
        <select
            className={cl.select}
            value={value}
            onChange={event => changeValue(event.target.value)}
        >
            {options.map(o => <option value={o.value} key={o.value}>{o.text}</option>)}
        </select>
    );
};

export default React.memo(SelectBlock);
