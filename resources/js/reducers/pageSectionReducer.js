import {
    ADD_SECTIONS, CLICK_NAVI_DOT
} from '../actions/types';

const INITIAL_STATE = {
    sections: [],
    sectionPositionMap: {},
    position: 0,
    currentSection: null
}

export default (state = INITIAL_STATE, action) => {
    let newState = {...state};
    switch (action.type) {
        case ADD_SECTIONS:
            newState = {...state, sections: action.payload.sections, sectionPositionMap: action.payload.sectionPositionMap};
            newState.currentSection = newState.sections[0].name;
            console.log(newState);
            return newState;
        case CLICK_NAVI_DOT:
            newState = {...state, position: action.payload.position, currentSection: action.payload.currentSection};
            console.log(newState);
            return newState;
        default:
            return state;
    }
}