import React from 'react';
import './Table.css';

class Table extends React.Component{
	render(){
		return (
				<div className="divTable mainStyle">
				<div className="divTableBody">
				<div className="divTableRow">
				<div className="divTableCell">Name</div>
				<div className="divTableCell">Age</div>
				<div className="divTableCell">Location</div>
				<div className="divTableCell">Department</div>
				</div>
				<div className="divTableRow">
				<div className="divTableCell">{this.props.Name}</div>
				<div className="divTableCell">{this.props.Age}</div>
				<div className="divTableCell">{this.props.Location}</div>
				<div className="divTableCell">{this.props.Department}</div>
				</div>
				</div>
				</div>
		);
	}
}

export default Table;