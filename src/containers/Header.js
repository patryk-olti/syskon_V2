import React from 'react';

import '../styles/Header.scss';

import Map from "../components/Map";

const Header = () => {


    return(
        <div className="header">
            <div className="aboutHeader">
                Działamy w całej Polsce!
            </div>
            <Map />
        </div>
    )
}

export default Header;