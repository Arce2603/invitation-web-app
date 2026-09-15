import React from 'react';
import EventInfo from './EventInfo'
import FAQ from './FAQ'
import {StartDecor2, StartDecor1} from './Icons'

const InvitationInfo = (props)=> (
    <div className='invite_content'>
        <div className='decor_end'>
            <StartDecor1/>
        </div>
        <div className='invite_section' >
            {
                props.event_info.map((event_info) => 
                 <EventInfo key={event_info.event} title={event_info.event} hora={event_info.time} lugar={event_info.place} direccion={event_info.address}  url={event_info.url}/>
                )
            }
        </div>
        <div className='invite_section'>
            <FAQ event_reminders={props.event_reminders}/>
        </div>
        <div className='decor_start'>
            <StartDecor2/>
        </div>
    </div>
);

export default InvitationInfo;