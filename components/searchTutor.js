import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class SearchTutor extends React.Component {
	constructor(){
		super()
		this.state = {
			filter: ''
		};
		this.showSearch = this.showSearch.bind(this);
	}
	showSearch(){
		return (
			<div>
			<Button bsStyle="primary" type="submit">
							Registrar
			</Button>
			
			</div>
		);
	}
	render() {
		return (
			<div >
				{this.showSearch()}
			</div>
		)
	}
}