import React, {FC, MouseEvent, useState} from 'react';
import cl from "../Main.module.css";
import {NavLink} from "react-router-dom";

export type MainDetailsLinkProps = {
    title: string,
    linkText: string,
    linkAddress: string,
    image: string
}

const MainDetailsLink: FC<MainDetailsLinkProps> = ({title,linkText, linkAddress,image}) => {

    const [show, setShow] = useState(false)

    const onDivMouseEnter = (event: MouseEvent<HTMLDivElement>) => setShow(true);
    const onDivMouseLeave = (event: MouseEvent<HTMLDivElement>) => setShow(false);
    return (
        <div
            className={cl.mainDetailsContainer}
            onMouseEnter={onDivMouseEnter}
            onMouseLeave={onDivMouseLeave}
            style={{backgroundImage: `url(${image})`}}>
            <div style={{opacity: show ? 0.7 : 0}} className={cl.nestedInfo}>
                <h2 className={cl.h2}>{title}</h2>
                <NavLink className={[cl.detailsLink, cl.h3].join(' ')} to={linkAddress}>{linkText}</NavLink>
            </div>
        </div>
    );
};

export default MainDetailsLink;
