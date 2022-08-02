import React, { Component } from 'react';
import Error from '../Error/Error';
export default class ErrorBoundry extends Component {
	state = {
		isError: false,
	};
	componentDidCatch() {
		console.log('error');
		this.setState({ isError: true });
	}
	render() {
		const { isError } = this.state;
		if (isError) return <Error />;
		return this.props.children;
	}
}
