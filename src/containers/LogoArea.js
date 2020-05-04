import React from 'react';

import "../styles/LogoArea.scss";

import Logo from "../components/Logo";
import Description from "../components/Description";

const LogoArea = () => {

    return (
        <div className="logoArea">
            <Logo />
            <Description />
        </div>
    )
}

export default LogoArea;