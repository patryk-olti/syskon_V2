import React, { Component } from 'react';

import Sponsors from "../containers/Sponsors";
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