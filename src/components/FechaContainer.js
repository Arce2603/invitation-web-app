import React from 'react'

const FechaContainer = (props)=> (
        <div className="white_container">
            <div className="pink_container">
                <p className='body'>¡Nos casamos!</p>
                <h2 className='fecha_container'>{props.date}</h2>
                <p className='body'>Monterrey, Nuevo Leon</p>
            </div>
        </div>
    );


export default FechaContainer;
