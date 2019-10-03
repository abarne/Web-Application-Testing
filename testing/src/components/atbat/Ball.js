import React from 'react';

export default function Ball(props) {
	return props.setState({
		ball: props.ball + 1
	});
}
