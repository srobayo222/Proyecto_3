import React, {Component} from 'react';

class SimpleProyect extends Component {
	scoreProyect(event) {
		event.preventDefault();
		Meteor.call("addScore", this.props.proyecto._id, parseFloat(this.refs.score.value.trim()), ()=>{
			this.refs.score.value="";
		});
		let total = 0;
		let array=this.props.proyecto.votes.map(vote => vote);
		for (let i=0; i < array.length; i++)
		{
			total+=array[i];
		}
		let h = parseFloat(total/array.length);
		Meteor.call("scoreProyect",this.props.proyecto._id, h);
	}

	render() {
		return (
			<li>
				<div>
					<label htmlFor={this.props.proyecto.text}>{this.props.proyecto.text}</label>
					<br />
					<label htmlFor={this.props.proyecto.member1}>{this.props.proyecto.member1}</label>
					<br />
					<label htmlFor={this.props.proyecto.member2}>{this.props.proyecto.member2}</label>
					<br />
					<label htmlFor={this.props.proyecto.url}><a href={this.props.proyecto.url}>{this.props.proyecto.url}</a></label>
					<br />
					<label htmlFor={this.props.proyecto.score}>Score {this.props.proyecto.score}</label>
					<br />
					<form className="score" onSubmit={this.scoreProyect.bind(this)}>
						<input type="number" ref="score" min="0" max="5" step="0.1"/>
						<button type="submit">Score</button>
					</form>
				</div>
			</li>			
		)
	}
}

export default SimpleProyect;