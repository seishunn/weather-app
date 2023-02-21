import React from 'react';
import cl from "./MiniInfoBlock.module.scss";

interface IMiniInfoBlock {
    mainText?: string | number
    mainTextSign?: string
    description?: string
    svg?: "drop" | "eye"
}

const icons = {
    drop: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 22c4.636 0 8-3.468 8-8.246C20 7.522 12.882 2.4 12.579 2.185a1 1 0 0 0-1.156-.001C11.12 2.397 4 7.503 4 13.75 4 18.53 7.364 22 12 22zm-.001-17.74C13.604 5.55 18 9.474 18 13.754 18 17.432 15.532 20 12 20s-6-2.57-6-6.25c0-4.29 4.394-8.203 5.999-9.49z"></path></svg>,
    eye: <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5C8.24261 5 5.43602 7.4404 3.76737 9.43934C2.51521 10.9394 2.51521 13.0606 3.76737 14.5607C5.43602 16.5596 8.24261 19 12 19C15.7574 19 18.564 16.5596 20.2326 14.5607C21.4848 13.0606 21.4848 10.9394 20.2326 9.43934C18.564 7.4404 15.7574 5 12 5Z" stroke="#000000"/><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#000000"/></svg>
}

const MiniInfoBlock: React.FC<IMiniInfoBlock> = ({mainText, mainTextSign, description, svg}) => {
    return (
        <div className={cl.miniInfoBlock}>
            <div className={cl.main}><span className={cl.main_text}>{mainText}</span><span className={cl.main_text_dop}>{mainTextSign}</span></div>
            <div className={cl.description}>
                <div className={cl.description_svg}>{svg ? icons[svg] : ""}</div>
                <div className={cl.description_text}>
                    {description}
                </div>
            </div>
        </div>
    );
};

export default React.memo(MiniInfoBlock);
