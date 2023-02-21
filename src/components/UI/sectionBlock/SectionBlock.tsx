import React from 'react';
import cl from "./SectionBlock.module.scss";

interface ISectionBlock {
    children: React.ReactNode
}

const SectionBlock: React.FC<ISectionBlock> = ({children}) => {
    return (
        <div className={cl.sectionBlock}>
            {children}
        </div>
    );
};

export default React.memo(SectionBlock);
