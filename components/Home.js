import React from 'react'
import 'whatwg-fetch';
import img from './logo.png';
import {Button, ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Register from './register.js';
import SignIn from './sign.js';
export default class Home extends React.Component {
    constructor() {
        super()
		this.state = {
			window: 0
			
		};
		    this.showLog = this.showLog.bind(this);
			this.showRegister = this.showRegister.bind(this);
    }
	showLog(){
	
		
			this.setState({window: 1});
	}
	showRegister(){
	
			this.setState({window: 2});
	
	}
    render() {
	console.log("WINDOWS: ", this.state.window);
	const wellStyles = {maxWidth: 400, margin: '0 auto 10px'};

        return (
			<div>
			{this.state.window ===0 ? 
			(<div>
				<h1 style={{textAlign:'center'}}> Tutor Me </h1>
				<img style={{display:'block', marginLeft:'auto', marginRight:'auto'}} src={img} />
				<div style={wellStyles}>
					<Button onClick={this.showLog}  bsStyle="primary">
						Inicio de sesion
					</Button>
				
					<Button onClick={this.showRegister}bsStyle="primary">
						Registro
					</Button>
				</div>
			</div>): <SignIn/>}
			</div>
				
        )
	}
 }

