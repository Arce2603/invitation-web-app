import React from 'react'

const Header = (props)=> (
        <div className="header">
            <h1 className="header_title"> {props.initials}</h1>
        </div>
    );

const Footer = (props)=> (
    <div className="footer">
        <h1 className="header_title"> {props.initials}</h1>
    </div>
);

export default Header;
export {Footer};