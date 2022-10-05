import React, {FC, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchAllDragons} from "../../store/reducers/DragonActionCreators";
import {checkAuth} from "../../store/reducers/AuthActionCreators";
import cl from './Main.module.css'
import MainInfo from "./MainInfo/MainInfo";
import MainDetails from "./MainDetails/MainDetails";
import Spinner from '../../components/UI/Spinner/Spinner'

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

    return (!isLoading
        ?
        <>
            <MainInfo isAuth={isAuth} dragons={dragons}/>
            <div className={[cl.allInfo, cl.h3].join(' ')}>All dragons</div>
            <MainDetails isAuth={isAuth} dragons={dragons}/>
        </>
        :
        <Spinner/>);
}

export default Main;
