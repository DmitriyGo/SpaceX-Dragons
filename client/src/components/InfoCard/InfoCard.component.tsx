import React, {FC} from 'react';
import cl from "../../pages/DragonsPages/DragonsPages.module.css";

export type InfoCardProps = {
    description: string,
    value: string
}

const InfoCard: FC<InfoCardProps> = ({value,description}) => {
    return (
        <div className={cl.aBox}>
            <div className={cl.valueContainer}>
                {value}
            </div>
            <div className={cl.textContainer}>
                <h3 className={cl.textTitle}>{description}</h3>
            </div>
        </div>
    );
};

export default InfoCard;
