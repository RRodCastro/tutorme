import React from 'react';
const styles = {
	text:{
		marginLeft: '20%',
		fontSize: '20px',
		paddingLeft: '10.8%'
	},
	boton:{
		marginLeft: '13%',
		marginBottom: '20%',
		fontSize: '20px',
	},
	comentario:{
		marginLeft: '2.8%',
		fontSize: '20px',
	},
	titulo:{
		fontSize: '30px',
		marginTop: '10%',
		marginLeft: '10%'
	},
	foto: {
		float: 'left',
		background: 'url("https://i.pinimg.com/736x/9c/66/e2/9c66e24650a00d706cb5aa4d94f45128--matt-bomer-white-collar-matt-bommer.jpg")',
		width: '250px',
		height: '250px',
		backgroundSize:     'cover',        
		backgroundRepeat:   'no-repeat',
		backgroundPosition: 'center center',  
		border: 'none',
		marginLeft: '10%',
		marginTop: '2%	',
		paddingTop: '2%'
	},
	calificacion: {
		float: 'right',
		color: 'ivy',
		marginLeft: '0.9%',
		marginRight: '23.99%',
		marginBottom: '4%',
		marginTop: '2%',
		fontSize: '20px'
	}
}

export default class CalificacionTutor extends React.Component{
	
	constructor(){
		super()
		this.state = {
			pos : 1
		};
	}
	
		enviarCalificacion(){
		if(this.state.pos == 0){
			this.setState({
				pos: 500
			})
		}else{
			this.setState({
				pos: 0
			})
		}
	}
		
			render(){
		window.scrollTo(0,this.state.pos)
		return (
			<div>
			<h1 style={{textAlign: 'center'}}> Calificacion de Tutor </h1>
			
			<div>
				<div>
					<select style={styles.calificacion}>
					  <option value="5">Excelente</option>
					  <option value="4">Muy Bien</option>
					  <option value="3">Bien</option>
					  <option value="2">Promedio</option>
					  <option value="1">Mal</option>
					</select>
					<p style={styles.calificacion}>Califique a su tutor</p>
				</div>
				<a style={styles.foto}></a>
			</div>
			
			<p style={styles.text}>Deje algun comentario...</p>
			<textarea  rows="6" cols="30" style={styles.comentario}>
				
			</textarea>
			<button onClick={this.enviarCalificacion.bind(this)} style={styles.boton}>Enviar</button>
			</div>
		)
	}
		
	}