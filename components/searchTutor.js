import React from 'react'
import { Button, Grid, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import TutorCard from './tutorCard';

export default class SearchTutor extends React.Component {
	constructor(){
		super()
		this.state = {
			filter: '',
			valueMat: '',
			valuekm: '',
			showTable: false
		};
		this.showTableState = this.showTableState.bind(this);
		this.showSearch = this.showSearch.bind(this);
		this.showTable = this.showTable.bind(this);
		this.showSearch2 = this.showSearch2.bind(this);
		this.handleValueChange = this.handleValueChange.bind(this);
		this.handleValueChangeKm = this.handleValueChangeKm.bind(this);
	}
	handleValueChange(value){
	this.setState({valueMat: value});
	
	}
		handleValueChangeKm(value){
	this.setState({valuekm: value});
	
	}
	showSearch(){
	const options = [
	{ value: 'one', label: 'Calculo I' },
	{ value: 'two', label: 'Cocina' },
	{ value: 'three', label: 'Biologia' },
	{ value: 'four', label: 'Algebra Lineal' }
 	]
	
		return (
			<div>
			<div style= {{width: '1000px', paddingLeft:'500px'}} >
			<Select
				autoFocus = {true} 
				simpleValue= {true}
				options= {options} 
				value={this.state.valueMat}
				placeholder={'Escoge una disciplina'}
				onChange={this.handleValueChange}				
			/>
			</div>
			</div>
		);
	}
	showSearch2(){
	const options = [
	{ value: 'one', label: '2 km' },
	{ value: 'two', label: '5 km ' },
	{ value: 'three', label: '7 km' }
 	]
		
		return (
			<div>
			<div style= {{width: '1000px', paddingLeft:'500px'}} >
			<Select
				autoFocus = {true} 
				simpleValue= {true}
				options= {options} 
				value={this.state.valuekm}
				placeholder={'Escoge la cercania'}
				onChange={this.handleValueChangeKm}				
			/>
			</div>
			</div>
		);
	}
	showTableState (){
		this.setState({showTable: true})
	}
	showTable() {
		let jsx;
		const products = [ {id: '1', name: 'ablerto', price: 'Q100'}]
		jsx = (
				<Grid>
    <Row>
			<TutorCard
				name= {'Rafael Carrera'}
				descr1= {'Estudiante de ingenieria ambiental'}
				descr2 = {'Me apasiona las matematicas'}
				descr3 = {'Estudio en la universidad rafael landivar'}
			/>
			<TutorCard
				name= {'Vinicio Cerezo'}
				descr1= {'Estudiante matematica'}
				descr2 = {'Me apasiona las matematicas'}
				descr3 = {'Estudio en la universidad del valle'}
			/>
			<TutorCard
				name= {'Jacobo Arbenz'}
				descr1= {'Profesor de matematica'}
				descr2 = {'10 años de experiencia en eseñanza'}
				descr3 = {'Graduado de la universidad san carlos'}
			/>
				</Row>
    </Grid>
		)
		return jsx;
		
	}
	render() {
		return (
			<div style= {{paddingTop: '50px', textAlign: 'center'}} >
				<h1> Buscar tutores </h1>
				<label> Elige una disciplina </label> <br/> {this.showSearch()}
				<br/>
				<br/>
				< label> Elige la cercania </label> <br/>{this.showSearch2()}
				<br/>
				<br/>
				<Button onClick={this.showTableState} bsStyle="primary"> Buscar tutores </Button>
				<br/>
				<br/>
				{this.state.showTable ? this.showTable(): <div/>}
			</div>
		)
	}
}