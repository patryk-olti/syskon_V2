import React from "react";
import "../styles/Sponsors.scss";

const Sponsor = (props) => (
    <div className="sponsor">
        <img src={props.img} alt="elo"></img>
    </div>
)

export default Sponsor;