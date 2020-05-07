import React from 'react';
import map from "../img/mapa.png";
import "../styles/Header.scss";
import Dot from './Dot';
import Plate from "./Plate";

class Map extends React.Component{

    state = {
        maxIteration: 5,
        base: []
    }

    changeActive = () => {
        const dots = [...document.querySelectorAll('.dot')];

        dots.forEach((item, index) => {
            item.classList.add('active');
        });
    }

    componentDidMount(){

        fetch('data.json')
        .then(response => response.json())
        .then(data => {

            setInterval(() => {
                this.changeActive();
            }, 6000);

            this.setState({
                base: data.devices,
                maxIteration: [...data.devices].length
            }) 
        })  
        
        setInterval( this.changeActive() , 1000);
    }

    render(){
        
        
        return (
            <div className="map">
               {this.state.base.length !== 0 ?  
                this.state.base.map(item => ( 
                    <Dot 
                        extendsClass = {item.city} 
                        city = {item.city} 
                        type = {item.type}
                        name = {item.name}
                        info = {item.info}
                    /> 
                )) 
               : null
            }

                <img src={map} alt="map"/>
            </div>
        )
    }
}

export default Map;