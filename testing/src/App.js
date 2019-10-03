import React from 'react';
import './App.css';
import Display from './components/Display';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			hit: 0,
			strike: 0,
			foul: 0,
			ball: 0
		};
	}

	addHit() {
		this.setState({
			hit: this.state.hit + 1
		});
		this.resetAll();
	}

	addBall() {
		if (this.state.ball < 3) {
			this.setState({
				ball: this.state.ball + 1
			});
		} else {
			this.resetAll();
		}
	}

	addFoul() {
		if (this.state.strike < 2) {
			this.setState({
				strike: this.state.strike + 1,
				foul: this.state.foul + 1
			});
		} else {
			this.setState({
				foul: this.state.foul + 1
			});
		}
	}

	addStrike = () => {
		if (this.state.strike < 2) {
			this.setState({
				strike: this.state.strike + 1
			});
		} else {
			this.resetAll();
		}

		// this.setState({
		// 	strike: this.state.strike + 1
		// });
		// if (this.state.strike >= 2) {
		// 	this.resetAll();
		// }
	};

	resetAll() {
		this.setState({
			strike: 0,
			foul: 0,
			ball: 0
		});
	}

	render() {
		return (
			<div className="App">
				Baseball App
				<h1>Strike: {this.state.strike}</h1>
				<button className="strikeButton" onClick={() => this.addStrike()}>
					Strike
				</button>
				<h1>Hits: {this.state.hit}</h1>
				<button className="hitButton" onClick={() => this.addHit()}>
					Hit
				</button>
				<h1>Foul: {this.state.foul}</h1>
				<button className="foulButton" onClick={() => this.addFoul()}>
					Foul
				</button>
				<h1>Ball: {this.state.ball}</h1>
				<button className="ballButton" onClick={() => this.addBall()}>
					Ball
				</button>
				{/* <Display state={this.state} /> */}
			</div>
		);
	}
}

export default App;
