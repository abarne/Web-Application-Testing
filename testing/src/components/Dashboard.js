import React from 'react';
import Ball from '../components/atbat/Ball';

export default function Dashboard(props) {
	console.log(props);
	return (
		<div>
			<h1>Dashboard component</h1>
			<button>Strike</button>
			<button>Foul</button>
			<button
				onClick={() => {
					Ball(props.props);
				}}
			>
				Ball
			</button>
			<button>Hit</button>
		</div>
	);
}
