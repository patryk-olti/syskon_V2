import React, { useState } from 'react';
import styled from "styled-components";

const Plate = styled.div`
    position: absolute;

    top: 56%;
    left: 27%;
    border: 1px solid black;
`

const PlateFun = props => {

    const [visible, setVisible] = useState(false);

    return(
        <Plate>
            {props.name}
        </Plate>
    )
}

export default PlateFun;