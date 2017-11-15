import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

export default class BeTutor extends React.Component {
	

	render() {
	    return (

	      <form id="be_tut">
	      	<h1>Aplicacion para ser tutor</h1>
	    	<br/>
	    	<br/>
	        <label>
	          Nombre: <br/>
	          <input type="text" size="70"/>
	        </label> <br/>

	       	<label>
	          Apellidos: <br/>
	          <input type="text" size="70"/>
	        </label><br/>
	        <label>
	          Fecha de nacimiento: <br/>
	          <input type="text" size="70"/>
	        </label><br/>
	        <label>
	          Correo: <br/>
	          <input type="text" size="70"/>
	        </label><br/>
	        <label>
	          Telefono: <br/>
	          <input type="text" size="70" />
	        </label><br/>
	        <label>
	          Por qué desea ser tutor?:  <br/>
	          <textarea rows="10" cols="70"></textarea>
	        </label><br/>
	        <br/>
	        <br/>
	        <div id="fotoDiv">
	        	<label>
	          		Fotografia  <br/>
	        	<input type="file" name="pic" accept="image/*" /><br/><br/>
	        	</label>
		        <label>
		          Titulos <br/>
		          <textarea rows="5" cols="70"></textarea>
		        </label><br/>
	        </div>

	        <Button bsStyle="primary"> Enviar </Button>
	      </form>
		);
	}
}
