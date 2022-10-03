import React from 'react';
import Slider from "../../components/UI/Slider/Slider.component";
import {useAppSelector} from "../../hooks/redux";
import cl from './DragonsPages.module.css'
import Container from "../../components/UI/Container/Container.component";
import InfoCard from "../../components/InfoCard/InfoCard.component";

const DragonOnePage = () => {

    const {dragons,isLoading,error} = useAppSelector(state => state.dragonReducer)
    const {posts} = useAppSelector(state => state.likedPostsReducer)

    return (
        <div>
            <Slider sliderData={dragons[0].flickr_images}/>
            <Container>
                <div className={cl.row}>
                    <InfoCard description='asd' value={'18'}/>
                </div>
            </Container>
        </div>
    );
};

export default DragonOnePage;
