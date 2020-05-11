import React from "react";
import Device from "../components/Device";

import img1 from "../img/syskon.png";

import "../styles/Devices.scss";

export default function Devices(){

    return(
        <div className="devicesBox">
            <div className="titleDevice">
                Nasze urządzenia
            </div>
            <div className="devices">
                <Device title="SysKon 400" about="SysKon400 jest przyrządem kontrolującym jakość węgla transportowanego przenośnikiem taśmowym. Urządzenie jest montowane z wagą technologiczną, która pozwala na pomiar masy urobku." img={img1}/>
                <Device title="SysKon 400" about="SysKon400 jest przyrządem kontrolującym jakość węgla transportowanego przenośnikiem taśmowym. Urządzenie jest montowane z wagą technologiczną, która pozwala na pomiar masy urobku." img={img1}/>
                <Device title="SysKon 400" about="SysKon400 jest przyrządem kontrolującym jakość węgla transportowanego przenośnikiem taśmowym. Urządzenie jest montowane z wagą technologiczną, która pozwala na pomiar masy urobku." img={img1}/>
            </div>
        </div>
    )
}

