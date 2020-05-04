import React from 'react';
import map from "../img/mapa.png";
import "../styles/Header.scss";
import Dot from '../components/Dot';

class Map extends React.Component{

    state = {
        iteration: 0,
        maxIteration: 5,
        base: []
    }

    changeActive = () => {
        const dots = [...document.querySelectorAll('.dot')];
        let variable = this.state.iteration;

        if(variable >= (this.state.maxIteration-1)){
            variable = 0;
        }else{
            variable = variable + 1;
        }

        dots.forEach((item, index) => {
            item.classList.remove('active');
            if(index === variable){
                item.classList.add('active');
            }
        });

        this.setState({
            iteration: variable
        })
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

               {this.state.base.length !== 0 ?  this.state.base.map(item => ( <Dot extendsClass = {item.city} /> )) 
               : null
            }

                <img src={map} alt="map"/>
    
            </div>
        )
    }
}

export default Map;