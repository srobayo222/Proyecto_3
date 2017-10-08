import React, { Component } from 'react';

class Formulario extends Component{
	
	addProyect(event) {
		event.preventDefault();
		var text = this.refs.proyecto.value.trim();
		var mem1 = this.refs.miem1.value.trim();
		var mem2 = this.refs.miem2.value.trim();
		var url = this.refs.url.value.trim();

		Proyectos.insert({
			text: text,
			member1: mem1,
			member2: mem2,
			url: url,
			createdAt: new Date(),
			score: 0
		});

		this.refs.proyecto.value="";
		this.refs.miem1.value="";
		this.refs.miem2.value="";
		this.refs.url.value="";

		console.log(text+ " created");
	}

	render(){
		return(
			<div>
				<h1>Add Proyects</h1>
				<form className="new-proyect" onSubmit={this.addProyect.bind(this)}>
					<input type="text" ref="proyecto" placeholder="Proyect Name" required />
					<br />
					<input type="text" ref="miem1" placeholder="Member #1" required />
					<br/>
					<input type="text" ref="miem2" placeholder="Member #2" />
					<br />
					<input type="text" ref="url" placeholder="Url" required />
					<br />
					<button type="submit">Add Proyect</button>
				</form>
			</div>
		);
	}
}

export default Formulario