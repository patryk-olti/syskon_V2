import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../styles/SecondNav.scss";

const NavSquare = (props) => {

    return(
        <li className="square">
            <i> <FontAwesomeIcon icon={ props.icon } /> </i>
        </li>
    )
}

export default NavSquare;