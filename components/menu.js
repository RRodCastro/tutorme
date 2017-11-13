import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';
import '../css/app.css';
import SignIn from './sign.js';
import SearchTutor from './searchTutor.js';

export default class Demo extends React.Component {
  constructor () {
	super()
    this.state = {
      currentMenu: 'slide',
      side: 'left',
	  viewMenu: -1,
	  isOpen: false
	  
    };
		this.isMenuOpen = this.isMenuOpen.bind(this);
		this.renderView = this.renderView.bind(this);
		this.getView = this.getView.bind(this);
  }
  getItems() {
  		const menuPointer ={ 
			cursor: 'pointer'
		}
    let items;
        items = [
          <a style={menuPointer} key="0" onClick={this.getView}><i className="fa fa-fw fa-star-o" /><span id="BT">Buscar tutores</span></a>,
          <a style={menuPointer} key="1" onClick={this.getView}><i className="fa fa-fw fa-bell-o" /><span id="CT">Calificar tutores</span></a>,
          <a style={menuPointer} key="2" onClick={this.getView}><i className="fa fa-fw fa-envelope-o" /><span id="MT">Mis tutores</span></a>,
          <a style={menuPointer} key="3" onClick={this.getView}><i className="fa fa-fw fa-comment-o" /><span id="P">Perfil</span></a>]
    return items;
  }

 getView(e) {
	let jsx;
	switch(e.target.id){
		case 'BT':
			this.setState({viewMenu: 0, isOpen:false});
			break;
		case 'CT':
			break;
		case 'MT':
			break;
		case 'P':
			break;
		default:
	}
 }
renderView(){
	let jsx;
	jsx = (<div/>);
	if (this.state.viewMenu === 0){
		jsx = (
			<SearchTutor/>
		)
	}
	return jsx;
}
isMenuOpen(state){
console.log(state);
	return state.isOpen;
} 
  getMenu() {
    const Menu = BurgerMenu[this.state.currentMenu];
    const items = this.getItems();
    let jsx;
        jsx = (
          <Menu isOpen= { this.state.isOpen } id={this.state.currentMenu} pageWrapId={'page-wrap'} outerContainerId={'outer-container'}>
            {items}
          </Menu>
      );
    return jsx;
  }

  render() {
	console.log(this.state.viewMenu);
    return (
      <div id="outer-container" style={{height: '100%'}}>
        {this.getMenu()}
          <h1 style ={{textAlign: 'center'}}> Welcome to tutorMe</h1>
		{this.renderView()}
	  </div>
    );
  }
}
