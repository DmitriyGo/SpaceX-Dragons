import React, {FC, useEffect, useState} from 'react';
import SliderButton from "./SliderButtons/SliderButton.component";
import cl from './Slider.module.css'
import SliderDots from "./SliderDots/SliderDots.component";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getAll, toggle} from "../../../store/reducers/FavouriteActionCreators";
export type SliderProps = {
    sliderData?: string[]
}

const Slider: FC<SliderProps> = ({sliderData}) => {
    const [slideIndex, setSlideIndex] = useState(1)
    const {posts} = useAppSelector(state => state.likedPostsReducer)
    const dispatch = useAppDispatch()


    useEffect(() => {
        dispatch(getAll())
    }, [])

    const nextSlide = () => {
        if(slideIndex !== sliderData?.length){
            setSlideIndex(slideIndex + 1)
        }
        else if (slideIndex === sliderData?.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        }
        else if (slideIndex === 1){
            if(sliderData?.length){
                setSlideIndex(sliderData.length)
            }
        }
    }

    function clickHandler(e: React.MouseEvent<HTMLImageElement>, img: string) {
        e.preventDefault();
        e.stopPropagation();
        dispatch(toggle({url: img}))

        if(posts.filter(x => x.url == img).length){
            toast.error(`Picture ${slideIndex} removed from favorites`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            })
        } else {
            toast.success(`Picture ${slideIndex} added to favorites`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <div className={cl.containerSlider}>
            {sliderData?.map((url, index) => {
                return (
                    <div
                        style={{borderBottom: posts.filter(x => x.url == url).length ? '4px solid #0FFF50' : ''}}
                        key={url}
                        className={slideIndex === index + 1 ? [cl.slide, cl.activeAnim].join(' ') : cl.slide}
                    >
                        <img className={cl.slideImg} onClick={(e) =>clickHandler(e, url)} draggable={false} src={url}/>
                    </div>
                )
            })}
            <SliderButton moveSlide={nextSlide} direction={"next"} />
            <SliderButton moveSlide={prevSlide} direction={"prev"}/>
            <SliderDots slideIndex={slideIndex} sliderData={sliderData} setSlideIndex={setSlideIndex}/>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme={'dark'}
            />
        </div>
    )
};

export default Slider;
