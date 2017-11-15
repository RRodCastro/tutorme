import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import BurgerMenu from 'react-burger-menu';
import classNames from 'classnames';
import '../css/app.css';
import SearchTutor from './searchTutor.js';
import BeTutor from './beTutor.js';
import Profile from './profile.js';
import Evaluate from './evaluateTutor.js';

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
          <a style={menuPointer} key="2" onClick={this.getView}><i className="fa fa-fw fa-comment-o" /><span id="P">Perfil</span></a>,
          <a style={menuPointer} key="3" onClick={this.getView}><i className="fa fa-fw fa-comment-o" /><span id="S">Quiero ser un tutor</span></a>]
    return items;
  }

 getView(e) {
	let jsx;
	switch(e.target.id){
		case 'BT':
			this.setState({viewMenu: 0, isOpen:false});
			break;
		case 'CT':
			this.setState({viewMenu: 1, isOpen: false});
			break;
		case 'P':
			this.setState({viewMenu: 2, isOpen: false});
			break;
		case 'S':
			this.setState({viewMenu: 3, isOpen:false});
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
	else if (this.state.viewMenu === 1){
		jsx = (
			<Evaluate/>
		)
	}
	else if (this.state.viewMenu === 2){
		jsx = (
			<Profile />
		)
	}
	else if (this.state.viewMenu === 3){
		jsx = (
			<BeTutor/>
		)
	}
	return jsx;
}
isMenuOpen(state){
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
    return (
      <div id="outer-container" style={{height: '100%'}}>
        {this.getMenu()}
        {this.state.viewMenu === -1 ? <h1 style ={{textAlign: 'center'}}> Bienvenido a TutorMe</h1> : <h1/>}
		{this.renderView()}
	  </div>
    );
  }
}
