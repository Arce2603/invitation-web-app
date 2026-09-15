import React from 'react'
import FechaContainer from './FechaContainer'
import FarewellContainer from './FarewellContainer'
import {ContainerType} from '../data/conainter_type'

const BoxContainer = (props)=> (
        <div className="banner">
            {getContainerType(props.containerType)}
        </div>
    );

const getContainerType = (type) => {
    if (type === ContainerType.FECHA) return <FechaContainer date='15 de enero'/>
    else return <FarewellContainer/>

};

export default BoxContainer;
