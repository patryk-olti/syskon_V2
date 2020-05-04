import React, { Component } from 'react';

import Sponsors from "../containers/Sponsors";
import MainNav from "../containers/MainNav";
import LogoArea from "../containers/LogoArea";
import Header from "../containers/Header";
import SecondNav from "../containers/SecondNav";
import MainAbout from "../containers/MainAbout";
import MainCounter from "../containers/MainCounter";
import Footer from "../containers/Footer";

class Home extends Component{

    render(){
        return(
            <div className="home">
                <Sponsors />
                <MainNav />
                <LogoArea />
                <Header />
                <SecondNav />
                <MainAbout />
                <MainCounter />
                <Footer />
            </div>
        )
    }
}


export default Home;