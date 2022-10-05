import React from 'react';
import cl from './Spinner.module.css'
import {TailSpin} from "react-loader-spinner";

const Spinner = () => {
    return (
        <div className={cl.spinner}>
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
        </div>
    );
};

export default Spinner;