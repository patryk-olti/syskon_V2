import React, { useState } from 'react';
import '../styles/Header.scss';

import styled from "styled-components";

const Plate = styled.div`
    min-width: 150px;
    padding: 10px;
    position: absolute;
    bottom: 150%;
    left: 100%;

    text-align: center;
    
    border: 2px solid black;

    color: black;
    background-color: white;
    z-index: 100;

    span{
        display: block;
        padding-bottom: 5px;

        font-family: Arial;
    }

    span:nth-of-type(1){
        text-transform: capitalize;
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1px;
        border-bottom: 1px solid gray;
    }
    span:nth-of-type(2){
        font-size: 18px;
    }
    span:nth-of-type(3){
        font-size: 10px;
    }
`



function Dot(props){
    let classN = 'dot '+ props.extendsClass;
    const [visible, setVisible] = useState(false);


    return(
        <div className={classN} >

            <div 
                className="dot hover" 
                onPointerEnter={ () => { setVisible(true); }}
                onPointerOut={ () => { setVisible(false); }}
            >

            </div>

            <div 
                style={visible ? {display: "block"} : {display: "none"}}
            >
                <Plate> 
                    <span>{props.city}</span>
                    <span>{props.name}</span>    
                    <span>{props.info}</span>          
                </Plate>
            </div>
        </div>
    )
}

export default Dot;