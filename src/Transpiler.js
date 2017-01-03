import React from 'react';
import './Table.css';

class Transpile extends React.Component{
	constructor(){
		super();

		this.state={
			input :'/* Add your JSX here */',
			output : '',
			err : ''
		}
	}

	update(e){
		let code=e.target.value;
		try{
			this.setState({
				output : window.Babel.transform(code, {presets:['es2015', 'react']}).code,
				err : ''
			})

		}catch (err) {
			this.setState({
				err: err.message
			})
		}
	}

	render(){
		return (
			<div>
				<textarea onChange={this.update.bind(this)} defaultValue={this.state.input} ></textarea>
				<pre>{this.state.output}</pre>
				<h3>{this.state.err}</h3>
			</div>
			)
	}
}

export default Transpile;