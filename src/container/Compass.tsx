import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as actions from "../actions";

import App from "../components/App";

import { StoreState } from "compass-map";

interface State {
	compass: StoreState;
}

class Compass extends React.Component<any, any> {
	render() {
		const { compass, actions } = this.props;

		return (
			<div className="container">
				<App />
			</div>
		);
	}
}

function mapState(state: State): State {
	return { compass: state.compass };
}

function mapDispatch(dispatch: any): any {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(
	mapState,
	mapDispatch
)(Compass);
