import React from 'react'
import img from './logo.png';
import {FormGroup, Form, Col, ControlLabel, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import Menu from './menu.js';

export default class Register extends React.Component {
    constructor() {
        super()
		this.state = {
			window: 0,
			startDate: moment()
			
		};
		this.showRegister = this.showRegister.bind(this);
		this.showApp = this.showApp.bind(this);

    }
	
	 handleChange(date) {
    this.setState({
      startDate: date
    });
  }
  showApp() {
	this.setState({
		window: 1
	});
  }
  showRegister() {
	return (
		<div>
				<h1 style={{textAlign:'center'}}> Registro </h1>
				
				<Form horizontal style={{paddingLeft: '150px'}}>
				<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							Nombre
						</Col>
						<Col sm={5}>
						<FormControl type="text" placeholder="Nombre" />
						</Col>
					</FormGroup>
					
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							Apellido
						</Col>
						<Col sm={5}>
						<FormControl type="text" placeholder="Apellido" />
						</Col>
					</FormGroup>
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							Fecha de Nacimiento
						</Col>
						<Col sm={5}>
						
					<DatePicker
					selected={this.state.startDate}
					onChange={this.handleChange.bind(this)}
					/>
						</Col>
					</FormGroup>
					
					
					<FormGroup controlId="formHorizontalEmail">
						<Col componentClass={ControlLabel} sm={2}>
							Email
						</Col>
						<Col sm={5}>
						<FormControl type="email" placeholder="Email" />
						</Col>
					</FormGroup>
				
				
				<FormGroup controlId="formHorizontalPassword">
					<Col componentClass={ControlLabel} sm={2}>
						Password
					</Col>
					<Col sm={5}>
						<FormControl type="password" placeholder="Password" />
					</Col>
				</FormGroup>
				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button onClick={this.showApp} bsStyle="primary" type="submit">
							Registrar
						</Button>
					</Col>
				</FormGroup>
			</Form>
			</div>
	)
  
  }
    render() {
        return (
		<div>
			{this.state.window === 0 ?
			this.showRegister(): this.state.window === 1 ? <Menu/> : <h1> Not Found</h1>}
        </div>
		)	
	}
 }

