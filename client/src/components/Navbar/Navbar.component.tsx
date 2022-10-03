import React from 'react';
import { NavLink } from 'react-router-dom';
import dragon_logo from "../../../static/dragon_logo_1.png";
import spacex from "../../static/spacex.png";
import user_logo from "../../static/user.png";
import cl from './Navbar.module.css'
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

const Navbar = () => {

    const {email} = useAppSelector(state => state.authReducer.user)
    const dispatch = useAppDispatch();

    return (
        <nav className={cl.navbar}>
            <div className={cl.navbarInner}>
                <NavLink className={cl.navbarLink} to='/'>
                    <img className={cl.navbarLinkImg} src={spacex} alt="dragon logo"/>
                </NavLink>
                {email && email.length > 0
                    ?
                    <NavLink className={cl.navbarLink} to='/user'>
                        <img className={cl.navbarLinkImg} src={user_logo} alt=""/>
                    </NavLink>
                    :
                    <NavLink className={cl.navbarLink} to='/signin'>
                        <img className={cl.navbarLinkImg} src={user_logo} alt=""/>
                    </NavLink>
                    }
            </div>
        </nav>
    );
};

export default Navbar;
