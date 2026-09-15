import React from 'react'

const PhotoBanner = (props)=> (
        <div className="image_banner">   
            <img className="photo" src={props.image} alt="our_photo"/>
            <div className="centered_text">{props.text}</div>    
        </div>
    );


export default PhotoBanner;
