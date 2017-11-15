import React from 'react'
import 'whatwg-fetch';
import img from './logo.png';
import {Button, ButtonToolbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Register from './register.js';
import SignIn from './sign.js';
import Menu from './menu.js';

export default class Home extends React.Component {
    constructor() {
        super()
		this.state = {
			window: 0
			
		};
		    this.showLog = this.showLog.bind(this);
			this.showRegister = this.showRegister.bind(this);
			this.showMenu = this.showMenu.bind(this);
			this.renderView = this.renderView.bind(this);
    }
	showLog(){
	
			//Login window : 1
			this.setState({window: 1});
	}
	showRegister(){
			// Register window : 2
			this.setState({window: 2});
	
	}
	showMenu() {
	const wellStyles = {textAlign: 'center'};
		return (
		<div>
				<h1 style={{textAlign:'center'}}> Tutor Me </h1>
				<img style={{display:'block', marginLeft:'auto', marginRight:'auto'}} src={img} />
				<div style={wellStyles}>
					
					<Button onClick={this.showLog}  bsStyle="primary">
						Inicio de sesion
					</Button>&nbsp;
				
					<Button onClick={this.showRegister}bsStyle="primary">
						Registro
					</Button>
				</div>
			</div>
		)
	}
	renderView() {
		let jsx;
		if (this.state.window === 1){
			jsx = (
				<SignIn/>
			)
		}
		else if (this.state.window ===2){
			jsx= (
				<Register/>
			)
		}
		return jsx;
	}
	
				
    render() {
        return (
			<div>
				{this.state.window === 0 ? this.showMenu(): this.renderView()}
			</div>
				
        )
	}
 }

