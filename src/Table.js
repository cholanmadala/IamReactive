import React from 'react';
import './Table.css';
import TableRow from './TableRow';

const HOC = (InnerComponent) => class extends React.Component{
	constructor(){
		super();
		this.state = {count:0}
	}

	update(){
		this.setState({
			count: this.state.count + 1
		})
	}

	componentWillMount(){
		console.log('from HOC');
	}

	render(){
		return (
			<InnerComponent {...this.props} {...this.state} update={this.update.bind(this)} />
		)
	}
}

const Button =HOC((props)=> <button onClick={props.update}>{props.children} {props.count}</button>);

class Table extends React.Component{

	constructor(){
		super();

		this.state={
			items : [],
			filterName : null,
			filterGender : null,
			filterDB : null,
			filterEC : null
		};
	}

	filter(){
		console.log(this.refs.filterDB.value);
		this.setState({
			filterName : this.refs.filterName.value,
			filterGender : this.refs.filterGender.value,
			filterDB : this.refs.filterDB.value,
			filterEC : this.refs.filterEC.value
		})
	}

	componentWillMount(){
		fetch('http://swapi.co/api/people/?format=json')
		.then(response => response.json())
		.then( ({results:items}) => this.setState({items}) )
		console.log('componentWillMount');
	}

	render(){
		let items= this.state.items;

		if(this.state.filterName || this.state.filterGender || this.state.filterDB || this.state.filterEC ){
			console.log(this.state.filterName);
			items=items.filter(item => item.name.toLowerCase().includes(this.state.filterName.toLowerCase() ) )/*.filter(item => item.gender.toLowerCase().includes(this.state.filterGender.toLowerCase() ) )*/;
		}

		return (
			<div>
			<Button onClick={this.update}>Hello Button 1 and Clicked - {this.state.count}</Button>
			<Button onClick={this.update}>Hello Button 2 and Clicked - {this.state.count}</Button>
			<h3>Filtered data: {items.length} of {this.state.items.length}</h3>
				<div className="divTable mainStyle">
					<div className="divTableBody">
						<div className="divTableRow">
							<div className="divTableCell">{this.props.Column1} <input ref="filterName" type="text" onChange={this.filter.bind(this)} /></div>
							<div className="divTableCell">{this.props.Column2} <input ref="filterGender" type="text" onChange={this.filter.bind(this)} /></div>
							<div className="divTableCell">{this.props.Column3} <input ref="filterDB" type="text" onChange={this.filter.bind(this)} /></div>
							<div className="divTableCell">{this.props.Column4} <input ref="filterEC" type="text"  onChange={this.filter.bind(this)} /></div>
						</div>
						{items.map((item, i) => <TableRow  key={i} Name={item.name} Gender={item.gender} BY={item.birth_year} EyeColor={item.eye_color} /> )}
					</div>
				</div>
			</div>
		);
	}
}

export default Table;