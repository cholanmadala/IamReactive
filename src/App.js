import React from 'react';
import Table from './Table';

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
			Department : 'CSP-1'
		};
	};

	updateName(e){
			this.setState({
				Name : e.target.value
			})
	}

	updateAge(e){
			this.setState({
				Age : e.target.value
			})
	}

	updateLocation(e){
			this.setState({
				Location : e.target.value
			})
	}

	updateDept(e){
			this.setState({
				Department : e.target.value
			})
	}

	render(){
		return (
				<div>
					<h1> {this.props.defaultMessage}!!!</h1>
					<h2>Please input your details in here:</h2>
					<div className="divTable mainStyle" >
					<div className="divTableBody">
					<div className="divTableRow">
					<div className="divTableCell">Name : </div>
					<div className="divTableCell"><input type="text" onChange={this.updateName.bind(this)} /></div>
					</div>
					<div className="divTableRow">
					<div className="divTableCell">Age : </div>
					<div className="divTableCell"><input type="number" onChange={this.updateAge.bind(this)}  /></div>
					</div>
					<div className="divTableRow">
					<div className="divTableCell">Location : </div>
					<div className="divTableCell"><input type="text" onChange={this.updateLocation.bind(this)} /></div>
					</div>
					<div className="divTableRow">
					<div className="divTableCell">Department : </div>
					<div className="divTableCell"><input type="text" onChange={this.updateDept.bind(this)} /></div>
					</div>
					</div>
					</div>
					<p>The name of the individual is {this.props.name}({this.props.age}).</p>
					<p>This is a normal paragraph. </p>
					<Table Name={this.state.Name} Age={this.state.Age} Location={this.state.Location} Department={this.state.Department}></Table>
				</div>
			);
	}
};

App.defaultProps={
	defaultMessage : "Hello (default) ",
	name : 'Mr/Mrs ....',
	age :  21
};

App.propTypes={
	defaultMessage : React.PropTypes.string.isRequired,
	name : React.PropTypes.string.isRequired,
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