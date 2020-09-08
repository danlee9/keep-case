import {
    ADD_SECTIONS,
    CLICK_NAVI_DOT
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