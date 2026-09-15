import React from 'react';
import {AttentionIcon} from './Icons'
import Reminders from './Reminders'

const FAQ = (props)=> (
    <div>
        <div className="icon_text">
            <AttentionIcon />
            <h2 className="title">FAQ</h2>
        </div>
            {
                props.event_reminders.map((reminder) => 
                    <Reminders key={reminder.question} reminder= {reminder} />
                )
            }
    </div>
);

export default FAQ;