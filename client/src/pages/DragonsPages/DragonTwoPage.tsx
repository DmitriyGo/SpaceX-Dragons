import React from 'react';
import {useAppSelector} from "../../hooks/redux";
import Container from "../../components/UI/Container/Container.component";
import cl from "./DragonsPages.module.css";
import Slider from "../../components/UI/Slider/Slider.component";
import Spinner from "../../components/UI/Spinner/Spinner";

const DragonTwoPage = () => {
    const {dragons, isLoading, error} = useAppSelector(state => state.dragonReducer)
    const {posts} = useAppSelector(state => state.likedPostsReducer)

    return (<div>

        <Container>
            {!isLoading ? <div className={cl.wrapper}>
                <h2 className={cl.h2}>Click on the picture to add to favorites</h2>
                <Slider sliderData={dragons[1].flickr_images}/>
                <div className={cl.table}>
                    <div className={cl.tableTitle}>
                        MAIN MODULE
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>HEIGHT</div>
                        <div className={cl.tableCol}>{dragons[1]?.height_w_trunk.meters}m<span className={cl.tableSpan}>/{dragons[1]?.height_w_trunk.feet}ft</span></div>
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>DIAMETER</div>
                        <div className={cl.tableCol}>{dragons[1]?.diameter.meters}m<span className={cl.tableSpan}>/{dragons[1]?.diameter.feet}ft</span></div>
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>CAPSULE VOLUME</div>
                        <div className={cl.tableCol}>{dragons[1]?.pressurized_capsule.payload_volume.cubic_meters}m<span className={cl.tableSpan}>/{dragons[1]?.pressurized_capsule.payload_volume.cubic_feet}ft<sup>3</sup></span></div>
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>TRUNK VOLUME</div>
                        <div className={cl.tableCol}>{dragons[1]?.trunk.trunk_volume.cubic_meters}m<span className={cl.tableSpan}>/{dragons[1]?.trunk.trunk_volume.cubic_feet}ft<sup>3</sup></span></div>
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>LAUNCH PAYLOAD MASS</div>
                        <div className={cl.tableCol}>{dragons[1]?.launch_payload_mass.kg}m<span className={cl.tableSpan}>/{dragons[1]?.launch_payload_mass.lb}ft</span></div>
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>RETURN PAYLOAD MASS</div>
                        <div className={cl.tableCol}>{dragons[1]?.return_payload_mass.kg}m<span className={cl.tableSpan}>/{dragons[1]?.return_payload_mass.lb}ft</span></div>
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>ORBIT DURATION</div>
                        <div className={cl.tableCol}>{dragons[1]?.orbit_duration_yr} years</div>
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>CREW CAPACITY</div>
                        <div className={cl.tableCol}>{dragons[1]?.crew_capacity}</div>
                    </div>
                    <div className={cl.tableTitle}>
                        HEAT SHIELD
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>HEAT SHIELD MATERIAL</div>
                        <div className={cl.tableCol}>{dragons[1]?.heat_shield.material}</div>
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>HEAT SHIELD TEMP</div>
                        <div className={cl.tableCol}>{dragons[1]?.heat_shield.temp_degrees} °C</div>
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>HEAT SHIELD SIZE</div>
                        <div className={cl.tableCol}>{dragons[1]?.heat_shield.size_meters}m</div>
                    </div>
                    <div className={cl.tableTitle}>
                        THRUSTERS
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>TYPE</div>
                        <div className={cl.tableCol}>{dragons[1]?.thrusters[0].type}</div>
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>AMOUNT</div>
                        <div className={cl.tableCol}>{dragons[1]?.thrusters[0].amount}</div>
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>FUEL 1</div>
                        <div className={cl.tableCol}>{dragons[1]?.thrusters[0].fuel_1}</div>
                    </div>
                    <div className={cl.tableRow}>
                        <div className={cl.tableCol}>FUEL 2</div>
                        <div className={cl.tableCol}>{dragons[1]?.thrusters[0].fuel_2}</div>
                    </div>
                </div>
            </div> : <Spinner/>}
        </Container>
    </div>);
};

export default DragonTwoPage;
