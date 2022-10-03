import React, {FC} from "react";
import leftArrow from "../icons/left-arrow.svg";
import cl from './SliderButtons.module.css'
import rightArrow from "../icons/right-arrow.svg";

export type SliderButtonProps = {
    direction: string,
    moveSlide: () => void
}

const SliderButton: FC<SliderButtonProps> = ({ direction, moveSlide }) => {
    return (
        <button
            onClick={moveSlide}
            className={direction === "next" ? `${cl.btnSlide} ${cl.next}` : `${cl.btnSlide} ${cl.prev}`}
        >
            <img className={cl.btnSlideImg} src={direction === "next" ? rightArrow : leftArrow} />
        </button>
    );
}

export default SliderButton;
