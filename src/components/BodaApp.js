import React from 'react';
import Header from './Header'
import Footer from './Footer'
import BoxContainer from './BoxContainer'
import InvitationInfo from './InvitationInfo'
import PhotoBanner from './PhotoBanner';
import ConfirmationButton from './ConfirmationButton'
import our_photo from '../assets/our_photo.png'
import farewell from '../assets/farewell_photo.png'
import {ContainerType} from '../data/conainter_type'

const data = require('../data/contents.json');

export default class BodaApp extends React.Component{
    render(){
        return(
            <div className="body-background">        
                <Header initials={data.initials}/>
                <PhotoBanner image={our_photo} text={data.names}/>
                <BoxContainer containerType={ContainerType.FECHA}/>
                <InvitationInfo event_info={data.event_info} event_reminders={data.event_reminders}/>
                <BoxContainer containerType={ContainerType.INFO}/>
                <PhotoBanner image={farewell}/>
                <Footer initials='G&A 2027.01.15'/>
            </div>
        );
    }
}

BodaApp.defaultProps = {
    options: []
}

// Passing data with context vs prop-drilling https://react.dev/learn/passing-data-deeply-with-context