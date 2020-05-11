import React from "react";

import "../styles/Devices.scss";

export default function Device(props){

    return(
        <div className="device">
            <div className="img">
                <img src={props.img} alt=""></img>
            </div>
            <div className="title">
                <span>
                    {props.title}
                </span>
            </div>
            <div className="about">
                <span> {props.about} </span>
            </div>   
        </div>
    )
}