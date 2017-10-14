import React from 'react'
import 'whatwg-fetch';
import img from './logo.png';
import {FormGroup, Form, Col, ControlLabel, FormControl, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class SingUp extends React.Component {
    constructor() {
        super()
		this.state = {
			window: 0,
			valuePassword: '',
			valueEmail: ''
			
		};
    }
	handlePassword (e) {
		this.setState({valuePass: e.target.value});
	}
	
    render() {

        return (
			
			<div>
			
				<h1 style={{textAlign:'center'}}> Inicio de Sesion </h1>
				
				<Form horizontal style={{textAlign:'center'}}>
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
						<FormControl onChange={this.handlePassword}type="password" placeholder="Password" />
					</Col>
				</FormGroup>
				
				<FormGroup>
					<Col smOffset={2} sm={10}>
						<Button bsStyle="primary" type="submit">
							Sign in
						</Button>
					</Col>
				</FormGroup>
			</Form>
			</div>
				
        )
	}
 }

