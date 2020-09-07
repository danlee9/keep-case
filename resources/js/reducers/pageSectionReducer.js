import {
    ADD_SECTIONS
} from '../actions/types';

const INITIAL_STATE = {
    sections: [],
    position: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_SECTIONS:
            let newState = {...state, sections: action.payload};
            console.log(newState);
            return newState;
        default:
            return state;
    }
}