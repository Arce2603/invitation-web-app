import React from 'react';
import {DividerIcon, LocationIcon} from './Icons'

const EventInfo = (props)=> (
    <div>
        <h2 className="title">{props.title}</h2>
        <p className="info emphasis_large">{props.hora}</p>
        <p className="info subtitle">{props.lugar}</p>
        <div className="icon_text">
            <LocationIcon/>
            <p className="emphasis"><a href={props.url}> {props.direccion}</a></p>
        </div>
        <DividerIcon/>
    </div>
);

export default EventInfo;