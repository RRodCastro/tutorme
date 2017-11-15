import React from 'react';
import ReactDOM from 'react-dom';
import { Thumbnail, Col, Row, Grid, Button, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class tutorCard extends React.Component {
    constructor(props) {
        super(props)
		this.state = {
			showAlert: false
		};
		this.renderCard = this.renderCard.bind(this);
		this.renderAlert = this.renderAlert.bind(this);
		this.showAlert = this.showAlert.bind(this);
		this.hideAlert = this.hideAlert.bind(this);
    }
	showAlert(){
		this.setState({showAlert: true});
	}
	hideAlert(){
		this.setState({showAlert: false});
	}
	renderAlert() {
	return (
	<Col style={{textAlign: 'center'}} xs={6} md={4} >
		<Alert bsStyle="success" >
          <h4>Se ha enviado un mensaje con exito</h4>
		  <p> Mensaje enviado a {this.props.name}@tutorme.com </p>
          <p>
            <Button onClick={this.hideAlert} bsStyle="primary">Aceptar</Button>
          </p>
        </Alert>
	</Col>
		);
	}
	renderCard() {
	return (
	<Col xs={6} md={4}>
        <Thumbnail src="./logo.png" alt="242x200">
          <h3> <strong> {this.props.name} </strong></h3>
          <p>{this.props.descr1}</p>
		  <p> {this.props.descr2 } </p>
		  <p> { this.props.descr3 }</p>
          <p>
            <Button onClick={this.showAlert}bsStyle="primary">Contactar</Button>&nbsp;
          </p>
        </Thumbnail>
      </Col>);
	
	}
	render() {
	console.log(this.state.showAlert);
        return (
		<div>
		
		{this.state.showAlert ? this.renderAlert(): ''}
		{this.renderCard()}
      </div>
	  

						
        );
	}
 }

