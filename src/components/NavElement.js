import React from 'react';

import "../styles/Li.scss";

const NavElement = (props) => {

    return(
        <li className="navElement">{props.name}</li>
    )
}

export default NavElement;