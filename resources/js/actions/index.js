import {
    ADD_SECTIONS
} from './types';

// adds all main-section html element positions to state
export const addSections = () => {
    const sections = []
    document.querySelectorAll('.main-section').forEach(section => {
        sections.push({
            name: section.id,
            offset: section.offsetTop
        });
    });
    return {
        type: ADD_SECTIONS,
        payload: sections
    }
}