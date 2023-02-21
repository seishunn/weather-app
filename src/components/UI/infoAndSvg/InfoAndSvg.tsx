import React from 'react';
import cl from "./InfoAndSvg.module.scss";

interface IInfoAndSvg {
    mainInfo: number | string
    mainInfoSign: string
    category: string
    willHappen?: boolean
    svg?: "rain" | "snow" | "sun"
}
const icons = {
    rain: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8 13h2v7H8zm3 2h2v7h-2zm3-2h2v7h-2z"></path><path d="M18.944 10.113C18.507 6.671 15.56 4.001 12 4.001c-2.756 0-5.15 1.611-6.243 4.15C3.609 8.793 2 10.82 2 13.001c0 2.757 2.243 5 5 5v-2c-1.654 0-3-1.346-3-3 0-1.403 1.199-2.756 2.673-3.015l.581-.103.192-.559C8.149 7.274 9.895 6.001 12 6.001c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-1v2h1c2.206 0 4-1.794 4-4a4.008 4.008 0 0 0-3.056-3.888z"></path></svg>,
    snow: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18.944 10.112C18.507 6.67 15.56 4 12 4 9.244 4 6.85 5.611 5.757 8.15 3.609 8.792 2 10.819 2 13c0 2.757 2.243 5 5 5v-2c-1.654 0-3-1.346-3-3 0-1.403 1.199-2.756 2.673-3.015l.581-.103.192-.559C8.149 7.273 9.895 6 12 6c2.757 0 5 2.243 5 5v1h1c1.103 0 2 .897 2 2s-.897 2-2 2h-1v2h1c2.206 0 4-1.794 4-4a4.008 4.008 0 0 0-3.056-3.888z"></path><circle cx="15" cy="16" r="1"></circle><circle cx="15" cy="19" r="1"></circle><circle cx="12" cy="18" r="1"></circle><circle cx="12" cy="21" r="1"></circle><circle cx="9" cy="19" r="1"></circle><circle cx="9" cy="16" r="1"></circle></svg>,
    sun: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19h2v3h-2zm0-17h2v3h-2zm-9 9h3v2h-3zm17 0h3v2h-3zM4.219 18.363l2.12-2.122 1.415 1.414-2.12 2.122zM16.24 6.344l2.122-2.122 1.414 1.414-2.122 2.122zM6.342 7.759 4.22 5.637l1.415-1.414 2.12 2.122zm13.434 10.605-1.414 1.414-2.122-2.122 1.414-1.414z"></path></svg>,
}

const InfoAndSvg: React.FC<IInfoAndSvg> = ({mainInfo, mainInfoSign, category, svg, willHappen= false}) => {
    return (
        <div className={`${cl.info_block} ${willHappen && cl.info_block_active}`}>
            <div className={`${cl.info_block_main} ${willHappen && cl.info_block_main_active}`}>{mainInfo}{mainInfoSign}</div>
            <div className={cl.info_block_category}>{category}
                <div className={`${cl.info_block_category_svg} ${willHappen && cl.info_block_category_svg_active}`}>
                    {svg ? icons[svg] : null}
                </div>
            </div>
        </div>
    );
};

export default React.memo(InfoAndSvg);
