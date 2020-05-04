import React from 'react';
import '../styles/Header.scss';

function Dot(props){

    let classN = 'dot '+ props.extendsClass;

    return(
        <div className={classN}></div>
    )
}

export default Dot;