import React, {Component} from 'react';

class SimpleProyect extends Component {
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
				</div>
			</li>			
		)
	}
}

export default SimpleProyect;