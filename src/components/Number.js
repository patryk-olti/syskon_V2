import React from 'react';
import styled from 'styled-components';

const Element = styled.div`
    margin-top: 10px;
    font-size: 80px;
    text-align: center;
`


const Number = (props) => {

    return(
        <Element>
            {props.number < 10 ? `0${props.number}` : `${props.number}`}
        </Element>
    )
}

export default Number;