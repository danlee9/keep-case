import {
    ADD_SECTIONS,
    CLICK_NAVI_DOT,
    ARROW_KEY_PRESS, SAVE_IMAGE, CLOSE_LINK_MODAL, OPEN_LINK_MODAL
} from './types';

// adds all main-section html element positions to state
export const addSections = () => {
    const sections = [];
    const sectionPositionMap = {};
    document.querySelectorAll('.main-section').forEach((section, index) => {
        const name = section.id;
        sections.push({
            name,
            offset: section.offsetTop
        });
        sectionPositionMap[name] = index;
    });
    return {
        type: ADD_SECTIONS,
        payload: {
            sections,
            sectionPositionMap
        }
    }
}

export const clickNaviDot = (position, currentSection) => {
    return {
        type: CLICK_NAVI_DOT,
        payload: {
            position,
            currentSection
        }
    }
}

export const arrowKeyPress = direction => {
    return {
        type: ARROW_KEY_PRESS,
        payload: direction
    }
}

export const openLinkModal = () => {
    return {
        type: OPEN_LINK_MODAL
    };
}

export const saveImage = formData => async dispatch => {
    const res = await axios.post('/api/image', formData);
    console.log(res.data);
    dispatch({type: SAVE_IMAGE, payload: res.data});
    // dispatch({type: SAVE_IMAGE});
}

export const closeLinkModal = () => {
    return {
        type: CLOSE_LINK_MODAL
    };
}