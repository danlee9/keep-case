import {
    ADD_SECTIONS, CLICK_NAVI_DOT, ARROW_KEY_PRESS
} from '../actions/types';

const INITIAL_STATE = {
    sections: [], // contains objects representing sections that have properties of name and offset
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
            return newState;
        case CLICK_NAVI_DOT:
            newState = {...state, position: action.payload.position, currentSection: action.payload.currentSection};
            return newState;
        case ARROW_KEY_PRESS:
            if (action.payload == 'ArrowUp') {
                if (newState.position != 0) {
                    newState.position -= 1;
                }
            } else {
                if (newState.position != newState.sections.length - 1) {
                    newState.position += 1;
                }
            }
            newState.currentSection = newState.sections[newState.position].name;
            return newState;
        default:
            return state;
    }
}