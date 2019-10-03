import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('Strike Button', () => {
	it('Strike increases on button click', () => {
		const component = shallow(<App />);
		const strikeButton = component.find('.strikeButton');

		strikeButton.simulate('click');
		component.update();

		expect(component.state().strike).toEqual(1);
	});

	it('Strike resets back to 0', () => {
		const component = shallow(<App />);
		const strikeButton = component.find('.strikeButton');

		console.log(component.state.strike);

		strikeButton.simulate('click').simulate('click').simulate('click');
		component.update();

		expect(component.state().strike).toEqual(0);
	});
});

describe('Foul Button', () => {
	it('Strike and foul increase by 1', () => {
		const component = shallow(<App />);
		const foulButton = component.find('.foulButton');

		foulButton.simulate('click');
		component.update();

		expect(component.state().foul).toEqual(1);
		expect(component.state().strike).toEqual(1);
	});
	it('Foul increases but strikes do not pass 2', () => {
		const component = shallow(<App />);
		const foulButton = component.find('.foulButton');

		foulButton.simulate('click').simulate('click').simulate('click');
		component.update();

		expect(component.state().foul).toEqual(3);
		expect(component.state().strike).toEqual(2);
	});
});

describe('Ball Button', () => {
	it('Ball increases by one on click', () => {
		const component = shallow(<App />);
		const ballButton = component.find('.ballButton');

		console.log(component.state.strike);

		ballButton.simulate('click');
		component.update();

		expect(component.state().ball).toEqual(1);
	});
	it('when ball hits 4, ball strike and foul reset to 0', () => {
		const component = shallow(<App />);
		const ballButton = component.find('.ballButton');
		const foulButton = component.find('.foulButton');
		const strikeButton = component.find('.strikeButton');

		strikeButton.simulate('click');
		foulButton.simulate('click');
		ballButton.simulate('click').simulate('click').simulate('click').simulate('click');
		component.update();

		expect(component.state().foul).toEqual(0);
		expect(component.state().ball).toEqual(0);
		expect(component.state().strike).toEqual(0);
	});
});

describe('Hit Button', () => {
	it('Hit button resets strike foul and ball to 0', () => {
		const component = shallow(<App />);
		const ballButton = component.find('.ballButton');
		const foulButton = component.find('.foulButton');
		const strikeButton = component.find('.strikeButton');
		const hitButton = component.find('.hitButton');

		strikeButton.simulate('click');
		foulButton.simulate('click');
		ballButton.simulate('click');
		hitButton.simulate('click');
		component.update();

		expect(component.state().foul).toEqual(0);
		expect(component.state().ball).toEqual(0);
		expect(component.state().strike).toEqual(0);
		expect(component.state().hit).toEqual(1);
	});
});
