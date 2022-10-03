import React, {FC, useEffect, useState} from 'react';
import SliderButton from "./SliderButtons/SliderButton.component";
import cl from './Slider.module.css'
import SliderDots from "./SliderDots/SliderDots.component";
export type SliderProps = {
    sliderData?: string[]
}

const Slider: FC<SliderProps> = ({sliderData}) => {
    const [slideIndex, setSlideIndex] = useState(1)

    // useEffect(() => {
    //     const interval = setInterval(nextSlide, 4000);
    //     return () => {
    //         clearInterval(interval)
    //     }
    // })

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

    return (
        <div className={cl.containerSlider}>
            {sliderData?.map((url, index) => {
                return (
                    <div
                        key={url}
                        className={slideIndex === index + 1 ? [cl.slide, cl.activeAnim].join(' ') : cl.slide}
                    >
                        <img className={cl.slideImg} draggable={false} src={url}/>
                    </div>
                )
            })}
            <SliderButton moveSlide={nextSlide} direction={"next"} />
            <SliderButton moveSlide={prevSlide} direction={"prev"}/>
            <SliderDots slideIndex={slideIndex} sliderData={sliderData} setSlideIndex={setSlideIndex}/>
        </div>
    )
};

export default Slider;
