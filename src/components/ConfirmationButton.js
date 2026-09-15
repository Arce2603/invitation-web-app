import React from 'react';
import InfoBody from './InvitationInfo'

export default class ConfirmationButton extends React.Component{
    handleConfirmation = () => {
        console.log('confirmado');
    }

    render(){
         return (
        <div className="confirmation">
            <button className="confirmation" onClick={this.handleConfirmation}>Confirma tu asistencia haciendo click Aqui</button>
        </div>
    );
    }
}
