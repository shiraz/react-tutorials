import * as actionTypes from '../actions/actionTypes';

import { updateObject } from '../utility';

const initialState = {
    counter: 0,
    results: []
};

const deleteResult = (state, action) => {
    const updatedArr = state.results.filter((result, index) => result.id !== action.resultElementId);
    return updateObject(state, updatedArr);
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT:
            return deleteResult(state, action);
    }
    return state;
};

export default reducer;