import * as actionTypes from './actions';
import uniqid from 'uniqid';

const initialState = {
    counter: 0,
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            console.log('Store result action reached.');
            const newPerson = {
                id: uniqid.time(),
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            };
            const newState = {
                ...state,
                persons: state.persons.concat(newPerson)
            };
            console.log(newState);
            return newState;
        case actionTypes.DELETE_RESULT:
            const updatedArr = state.results.filter((result, index) => result.id !== action.resultElementId);
            return {
                ...state,
                results: updatedArr
            };
        default:
            console.log("test");
            console.log(state);
            console.log(action.type);
    }
    return state;
};

export default reducer;