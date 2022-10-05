import React, {FC} from 'react';
import cl from "../../pages/DragonsPages/DragonsPages.module.css";

export type InfoCardProps = {
    description: string,
    value: string
}

const InfoCard: FC<InfoCardProps> = ({value,description}) => {
    return (
        <div className={cl.aBox}>

            <div className={cl.textContainer}>
               {description}
            </div>
            <div className={cl.valueContainer}>
                {value}
            </div>
        </div>
    );
};

export default InfoCard;
