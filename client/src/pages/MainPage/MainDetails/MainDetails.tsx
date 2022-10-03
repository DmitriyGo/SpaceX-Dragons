import React, {FC, MouseEvent, useEffect, useState} from 'react';
import cl from '../Main.module.css'

import {MainProps} from "../MainInfo/MainInfo";
import {NavLink} from "react-router-dom";
import MainDetailsLink from "./MainDetailsLink";


const MainDetails: FC<MainProps> = ({dragons, isAuth}) => {

    const [image1, setImage1] = useState('')
    const [image2, setImage2] = useState('')

    useEffect(() => {
        setImage1(dragons[0]?.flickr_images[Math.floor(Math.random() * (dragons[0]?.flickr_images.length))])
        setImage2(dragons[1]?.flickr_images[Math.floor(Math.random() * (dragons[1]?.flickr_images.length))])
    }, [])

    return (
        <div className={cl.mainDetails}>
            <MainDetailsLink linkAddress={isAuth ? 'dragons/1' : 'signin'} linkText='Click to read more!' image={image1} title='DRAGON 1'/>
            <MainDetailsLink linkAddress={isAuth ? 'dragons/2' : 'signin'} linkText='Click to read more!' image={image2} title='DRAGON 2'/>
        </div>
    );
};

export default MainDetails;
