import * as actionTypes from '../actions';

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            };
        case actionTypes.DELETE_RESULT:
            const updatedArr = state.results.filter((result, index) => result.id !== action.resultElementId);
            return {
                ...state,
                results: updatedArr
            }
    }
    return state;
};

export default reducer;