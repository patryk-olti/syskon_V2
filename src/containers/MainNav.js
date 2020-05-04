import React from "react";

import "../styles/MainNav.scss";

import NavElement from '../components/NavElement';

const MainNav = () => {

    return(
        <div className="mainNavBox">
            <ul className="mainNav">
                <NavElement name="firma"/>
                <NavElement name="produkty"/>
                <NavElement name="zainstalowane"/>
                <NavElement name="zdjęcia"/>
                <NavElement name="przetargi"/>
                <NavElement name="kontakt"/>
            </ul>
        </div>
    )
}

export default MainNav;