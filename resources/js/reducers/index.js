import { combineReducers } from "redux";
import imageReducer from './imageReducer';
import pageSectionReducer from './pageSectionReducer';

export default combineReducers({
    image: imageReducer,
    section: pageSectionReducer
});