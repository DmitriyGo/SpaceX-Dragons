import React, {Dispatch, FC, SetStateAction} from 'react';
import cl from './SliderDots.module.css'
export type SliderDotsProps = {
    sliderData?: string[]
    setSlideIndex: Dispatch<SetStateAction<number>>
    slideIndex: number
}

const SliderDots: FC<SliderDotsProps> = ({sliderData, setSlideIndex, slideIndex}) => {
    return (
        <div className={cl.sliderDots}>
            {sliderData?.map((item, index) => (
                <div
                    key={index}
                    onClick={() => setSlideIndex(index + 1)}
                    className={slideIndex === index + 1 ? [cl.dot, cl.active].join(' ') : cl.dot}
                ></div>
            ))}
        </div>
    );
};

export default SliderDots;
