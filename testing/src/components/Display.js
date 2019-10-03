import React from 'react';
import Dashboard from './Dashboard';

export default function display(props) {
	return (
		<div className="display-component">
			<div className="ball-strike">
				<h1>Ball: {props.state.ball}</h1>
				<h1>Strike: {props.state.strike}</h1>
			</div>
			<Dashboard props={props.state} />
		</div>
	);
}
