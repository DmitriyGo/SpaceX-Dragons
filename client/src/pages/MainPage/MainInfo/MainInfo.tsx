import React, {FC} from 'react';
import cl from "../Main.module.css";
import Button from "../../../components/UI/Button/Button";
import {DragonModel} from "../../../models/Dragon.model";

export type MainProps = {
    dragons: DragonModel[]
    isAuth: boolean
}

const MainInfo: FC<MainProps> = ({dragons}) => {
    return (
        <div className={cl.main}>

            <div className={cl.mainInner}>
                <div className={cl.mainInnerLeft}>
                    <h2 className={cl.h2}>{dragons[0]?.name}</h2>
                    <h3 className={cl.h3}>{dragons[0]?.description}</h3>
                    <div className={cl.buttonBox}>
                        <Button target='_blank' href={dragons[0]?.wikipedia}>Wikipedia</Button>
                    </div>
                    <div className={cl.table}>
                        <div className={cl.tableRow}>
                            <div className={cl.tableCol}>HEIGHT</div>
                            <div className={cl.tableCol}>{dragons[0]?.height_w_trunk.meters}m<span className={cl.tableSpan}>/{dragons[0]?.height_w_trunk.feet}ft</span></div>
                        </div>
                        <div className={cl.tableRow}>
                            <div className={cl.tableCol}>DIAMETER</div>
                            <div className={cl.tableCol}>{dragons[0]?.diameter.meters}m<span className={cl.tableSpan}>/{dragons[0]?.diameter.feet}ft</span></div>
                        </div>
                        <div className={cl.tableRow}>
                            <div className={cl.tableCol}>CAPSULE VOLUME</div>
                            <div className={cl.tableCol}>{dragons[0]?.pressurized_capsule.payload_volume.cubic_meters}m<span className={cl.tableSpan}>/{dragons[0]?.pressurized_capsule.payload_volume.cubic_feet}ft<sup>3</sup></span></div>
                        </div>
                        <div className={cl.tableRow}>
                            <div className={cl.tableCol}>TRUNK VOLUME</div>
                            <div className={cl.tableCol}>{dragons[0]?.trunk.trunk_volume.cubic_meters}m<span className={cl.tableSpan}>/{dragons[0]?.trunk.trunk_volume.cubic_feet}ft<sup>3</sup></span></div>
                        </div>
                        <div className={cl.tableRow}>
                            <div className={cl.tableCol}>LAUNCH PAYLOAD MASS</div>
                            <div className={cl.tableCol}>{dragons[0]?.launch_payload_mass.kg}m<span className={cl.tableSpan}>/{dragons[0]?.launch_payload_mass.lb}ft</span></div>
                        </div>
                        <div className={cl.tableRow}>
                            <div className={cl.tableCol}>RETURN PAYLOAD MASS</div>
                            <div className={cl.tableCol}>{dragons[0]?.return_payload_mass.kg}m<span className={cl.tableSpan}>/{dragons[0]?.return_payload_mass.lb}ft</span></div>
                        </div>
                    </div>

                </div>
                <img className={cl.rightImage} src={dragons[0]?.flickr_images[0]} alt=""/>

            </div>
        </div>
    );
};

export default MainInfo;
