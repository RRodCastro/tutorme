import React from 'react'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

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
		<div style={{width: '1200px', paddingLeft:'500px'}}>
			<BootstrapTable data={ products } >
          <TableHeaderColumn dataField='id' isKey>Product ID</TableHeaderColumn>
          <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
          <TableHeaderColumn dataField='price'>Product Price</TableHeaderColumn>
      </BootstrapTable>
	  </div>
		)
		return jsx;
		
	}
	render() {
	console.log(this.state.showTable);
		return (
			<div style= {{textAlign: 'center'}} >
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