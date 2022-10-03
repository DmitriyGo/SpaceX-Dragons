import React, {FC, ReactNode} from 'react';
import cl from './Input.module.css'

export type InputProps = {

    [x:string]: any
}

const Input: FC<InputProps> = (x) => {
    return (
        <input {...x} className={cl.input}/>
    );
};

export default Input;
