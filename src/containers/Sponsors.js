import React from 'react';
import Sponsor from '../components/Sponsor';

import "../styles/Sponsors.scss";

import img1 from "../img/funduszeEuropejskie.jpg";
import img2 from "../img/dolny.png";
import img3 from "../img/uniaEuropejska.jpg";

const Sponsors = () => {

    return(
        <div className="sponsorsBox">
            <div className="sponsors">
                <Sponsor img={img1}/>
                <Sponsor img={img2}/>
                <Sponsor img={img3}/>
            </div>
        </div>
    )
}

export default Sponsors;