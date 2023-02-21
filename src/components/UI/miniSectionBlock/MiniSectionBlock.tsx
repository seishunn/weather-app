import React, {useEffect, useMemo} from 'react';
import cl from "./MiniSectionBlock.module.scss";
import {useChildren} from "../../../hooks/useChildren";

interface IMiniSectionBlock {
    title: string
    children: React.ReactNode
    mini?: boolean
}

const MiniSectionBlock: React.FC<IMiniSectionBlock> = ({title, children, mini= false}) => {
    return (
        <div className={cl.main}>
            <div className={mini? cl.title_mini : cl.title}>{title}</div>
            {children}
        </div>
    );
};

export default React.memo(MiniSectionBlock);
