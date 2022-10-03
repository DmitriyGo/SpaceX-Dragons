import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAllDragons} from "../../store/reducers/DragonActionCreators";
import {checkAuth} from "../../store/reducers/AuthActionCreators";
import cl from './Main.module.css'
import {TailSpin} from "react-loader-spinner";
import MainInfo from "./MainInfo/MainInfo";
import MainDetails from "./MainDetails/MainDetails";

const Main: FC = () => {
    const {dragons, isLoading, error} = useAppSelector(state => state.dragonReducer);
    const {isAuth} = useAppSelector(state => state.authReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchAllDragons())
        if (localStorage.getItem('token')) {
            dispatch(checkAuth())
        }
    }, []);

    return (
        !isLoading ?
        <>
            <MainInfo isAuth={isAuth} dragons={dragons}/>
            <div className={[cl.allInfo, cl.h3].join(' ')}>All dragons</div>
            <MainDetails isAuth={isAuth} dragons={dragons}/>
        </>
        :
    <div style={{display: 'flex', justifyContent: 'center'}}>
        <TailSpin
            height="120"
            width="120"
            color="#fff"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </div>);
}

export default Main;
