import * as actionTypes from "../utils/actionTypes";

type actionType = keyof typeof actionTypes;

type Action = {
	prefecture: string;
	type: actionType;
};

const initialAppState = {
	prefecture: ""
};

const compass = (state = initialAppState, action: Action) => {
	console.log(action);

	switch (action.type) {
		case actionTypes.CHANGE_PREFECTURE: {
		}

		default: {
			return {
				...state
			};
		}
	}
};

export default compass