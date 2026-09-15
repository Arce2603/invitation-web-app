//import BodaApp from './components/BodaApp'

const Header = (props)=> {
    return (
        <div className="header">
           <div className="container">
                <h1 className="header__title">Greg & Arcelia</h1>
            </div> 
        </div>
        );
}; 

const ConfirmationButton = (props)=> {
    return (
        <div className="confirmation">
            <button className="confirmation" onClick={props.handleConfirmation}>Confirma tu asistencia haciendo click Aqui</button>
        </div>
    );
}; 


const PlaceInfo = (props)=> {
    return (
        <div className="body">
            <h2 className="info_title">{props.title}</h2>
            <p className="info_hora">{props.hora}</p>
            <p className="info_lugar">{props.lugar}</p>
            <p className="info_direccion">{props.direccion}</p>
        </div>
        );
    };

const InfoBody = (props)=> {
    return (<div className="body">
            <PlaceInfo title="Misa" hora="5:45" lugar="Pueblo Serena" direccion="Carretera Nacional"/>
            <PlaceInfo title="Salon" hora="6-7pm" lugar="Verite" direccion="Carretera Nacional"/>
        </div>);

};

class BodaApp extends React.Component{
    constructor(props) {
        super(props);
        this.handleConfirmation = this.handleConfirmation.bind(this)
    }
    handleConfirmation() {
        console.log('confirmado');
    }

    render(){
        return(
            <div className="body-background">        
                <Header/>
                <ConfirmationButton handleConfirmation={this.handleConfirmation}/>
                <InfoBody/>
            </div>
        );
    }
}

ReactDOM.render(<BodaApp/>, document.getElementById('app'));