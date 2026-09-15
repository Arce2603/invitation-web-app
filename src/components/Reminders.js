import React from 'react';

const Reminders = (props)=> (
    <div className='faq_body'>      
        <p className='emphasis faq_text'>{props.reminder.question}</p>
        <p className='faq_text'>{props.reminder.answer}</p>
    </div>
);

export default Reminders;