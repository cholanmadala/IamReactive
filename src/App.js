import React from 'react';
import Table from './Table';
import Transpiler from './Transpiler';

// ES6 way of writing the State/Stateless React component
class App extends React.Component{
	//call the
	constructor(){
		// to have the 'this' keyword with the context in the current component rather than React.Component
		super();

		this.state={
			Name : 'Cholan',
			Age : 27,
			Location : 'Vinukonda',
			Department : 'CSP-1',
			currentEvent : '---',
			items : []
		};

		this.update = this.update.bind(this)
	}

	update(e) {
		this.setState({currentEvent:e.type});
	}

	updateThings(){
			this.setState({
				Name : this.refs.nameInput.value,
				Age: this.refs.ageInput.value,
				Location: this.refs.locationInput.value,
				Department:this.refs.deptInput.value
			})
	}

	render(){

		return (
			<div>
				<div>
				{/*<Transpiler></Transpiler>*/}
					<h1>{this.props.defaultMessage}!!!</h1>
					<h2>{this.props.children}</h2>
					<h2>The current event is {this.state.currentEvent}</h2>
						<div className="divTable mainStyle" >
							<div className="divTableBody">
								<div className="divTableRow">
									<div className="divTableCell">Name : </div>
									<div className="divTableCell"><input ref="nameInput" type="text" /></div>
								</div>
								<div className="divTableRow">
									<div className="divTableCell">Age : </div>
									<div className="divTableCell"><input ref="ageInput" type="number" onChange={this.updateThings.bind(this)}  /></div>
								</div>
								<div className="divTableRow">
									<div className="divTableCell">Location : </div>
									<div className="divTableCell"><input ref="locationInput" type="text" onChange={this.updateThings.bind(this)} /></div>
								</div>
								<div className="divTableRow">
									<div className="divTableCell">Department : </div>
									<div
										onKeyPress={this.update}
										onFocus={this.update}
										onBlur={this.update}
										onCopy={this.update}
										onCut={this.update}
										onPaste={this.update}
										className="divTableCell"><input ref="deptInput" type="text" onChange={this.updateThings.bind(this)} /></div>
								</div>
							</div>
						</div>
					<p>The name of the individual is <b> <i>{this.props.name}</i> </b> ({this.props.age}).</p>
					<p>This is a normal paragraph. </p>
					<Table Column1={this.props.Column1} Column2={this.props.Column2} Column3={this.props.Column3} Column4={this.props.Column4}></Table>
				</div>
			</div>
		);
	}
};

App.defaultProps={
	defaultMessage : "Hello (default) ",
	age :  21,
	Column1 : 'Name',
	Column2 : 'Gender',
	Column3 : 'Year of Birth',
	Column4 : 'Eye Color'
};

App.propTypes={
	defaultMessage : React.PropTypes.string.isRequired,
	// name : React.PropTypes.string.isRequired,
	name(props, propName, component){
		if(!(propName in props)) {
			return new Error(`missing ${propName}`)
		}
		else if (props[propName].length < 6) {
			return new Error(`The name is too short....`);
		}
	},
	age : React.PropTypes.number.isRequired,
}

// ES5 way of writing the State/Stateless React component
/*
var App =  React.createClass({
	render : function (){
			return (
							<div>
								<h1> Hello World!!!</h1>
								<p>This is a normal paragraph. </p>
							</div>
						);
					}
});*/

// Stateless Functional Component
/*const App = () => (<div>
								<h1> Hello World!!!</h1>
								<p>This is a normal paragraph. </p>
							</div>);
*/
export default App;