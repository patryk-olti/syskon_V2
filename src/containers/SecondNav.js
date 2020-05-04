import React from 'react';
import NavSquare from '../components/NavSquare';

import "../styles/SecondNav.scss";

import { faImages, faPhone, faHome, faAtom } from '@fortawesome/free-solid-svg-icons';

const SecondNav = () => {

    return(
        <div className="secondNavBox">
            <ul className="secondNav">
                <NavSquare icon={ faHome } />
                <NavSquare icon={ faAtom } />
                <NavSquare icon={ faImages } />
                <NavSquare icon={ faPhone } />
            </ul>
        </div>
    )
}

export default SecondNav;