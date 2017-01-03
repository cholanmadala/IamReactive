import React from 'react';
import './Table.css';


class TableRow extends React.Component{
	render(){
		return (
			<div className="divTableRow">
				<div className="divTableCell">{this.props.Name}</div>
				<div className="divTableCell">{this.props.Gender}</div>
				<div className="divTableCell">{this.props.BY}</div>
				<div className="divTableCell">{this.props.EyeColor}</div>
			</div>
		);
	}
}

export default TableRow;