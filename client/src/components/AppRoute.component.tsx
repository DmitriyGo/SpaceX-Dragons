import React, {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./Layout/Layout";
import Main from "../pages/MainPage/Main";
import UserPage from "../pages/UserPage/UserPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import {useAppSelector} from "../hooks/redux";
import DragonOnePage from '../pages/DragonsPages/DragonOnePage';
import DragonTwoPage from "../pages/DragonsPages/DragonTwoPage";

const AppRoute: FC = () => {
    const {isAuth} = useAppSelector(state => state.authReducer)
    return isAuth ? (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
                <Route path="user" element={<UserPage/>}/>
                <Route path="dragons/1" element={<DragonOnePage/>}/>
                <Route path="dragons/2" element={<DragonTwoPage/>}/>
            </Route>
            <Route path="*" element={<Navigate to='/' replace/>}/>
        </Routes>
    ) : (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Main/>}/>
            </Route>
            <Route path="signup" element={<RegisterPage/>}/>
            <Route path="signin" element={<LoginPage/>}/>
            <Route path="*" element={<Navigate to='/' replace/>}/>
        </Routes>
    );
};

export default AppRoute;
