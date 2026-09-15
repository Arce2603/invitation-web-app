import React from 'react'

const Footer = (props)=> (
    <div className="footer">
        <h1 className="footer_title"> {props.initials} {props.date}</h1>
    </div>
);

export default Footer;