import React, { Component } from 'react';

import Sponsors from "../containers/Sponsors";
import MainNav from "../containers/MainNav";
import LogoArea from "../containers/LogoArea";
import Header from "../containers/Header";
import SecondNav from "../containers/SecondNav";
import Devices from "../containers/Devices";
import Counter from "../containers/CounterBox";
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
                <Devices />
                <Counter />
                <Footer />
            </div>
        )
    }
}


export default Home;