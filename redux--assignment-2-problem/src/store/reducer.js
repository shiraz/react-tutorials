import * as actionTypes from './actions';
import uniqid from 'uniqid';

const initialState = {
    counter: 0,
    persons: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: uniqid.time(),
                name: action.personData.name,
                age: action.personData.age
            };
            return {
                ...state,
                persons: state.persons.concat(newPerson)
            };
        case actionTypes.DELETE_PERSON:
            const updatedArr = state.persons.filter(person => person.id !== action.resultPersonId);
            return {
                ...state,
                persons: updatedArr
            };
    }
    return state;
};

export default reducer;