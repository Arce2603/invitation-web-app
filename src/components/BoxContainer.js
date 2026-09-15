import React from 'react'
import FechaContainer from './FechaContainer'
import FarewellContainer from './FarewellContainer'
import {ContainerType} from '../data/conainter_type'

const BoxContainer = (props)=> (
        <div className="banner">
            {getContainerType(props.containerType, props.date)}
        </div>
    );

const getContainerType = (type, date) => {
    if (type === ContainerType.FECHA) return <FechaContainer date={date}/>
    else return <FarewellContainer/>

};

export default BoxContainer;
