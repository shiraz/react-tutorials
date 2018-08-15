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
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            };
        case actionTypes.DELETE_RESULT:
            const updatedArr = state.persons.filter(person => person.id !== action.resultPersonId);
            return {
                ...state,
                persons: updatedArr
            };
        default:
            console.error('Invalid action type detected.');
    }
    return state;
};

export default reducer;