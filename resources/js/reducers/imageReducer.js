import { CLOSE_LINK_MODAL, OPEN_LINK_MODAL, SAVE_IMAGE } from "../actions/types";

const INITIAL_STATE = {
    imagePath: null,
    linkModal: false,
    linkProduced: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_LINK_MODAL:
            return {...state, linkModal: true};
        case SAVE_IMAGE:
            // const path = window.location.host + '/' + action.payload.path
            console.log(action.payload);
            return {...state, imagePath: action.payload.path};
        case CLOSE_LINK_MODAL:
            return {...state, linkModal: false, imagePath: null};
        default:
            return state;
    }
};