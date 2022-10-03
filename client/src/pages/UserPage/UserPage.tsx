import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import Button from "../../components/UI/Button/Button";
import {logout} from "../../store/reducers/AuthActionCreators";
import {useNavigate} from "react-router-dom";
import Slider from "../../components/UI/Slider/Slider.component";
import cl from './UserPage.module.css'

const UserPage = () => {
    const {dragons} = useAppSelector(state => state.dragonReducer)
    const {user, isLoading} = useAppSelector(state => state.authReducer)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onButtonClick = async (e: React.MouseEvent) => {
        await dispatch(logout())
        navigate('/signin')
    }

    return  isLoading ? (<div>Loading...</div>) :
        <div>
            <div>{user.isActivated.toString()}</div>
            <Button onClick={onButtonClick}>Log out</Button>
            <Slider sliderData={dragons[0].flickr_images}/>
        </div>;
};

export default UserPage;
