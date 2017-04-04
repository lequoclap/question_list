import {ActionTypes, FormStatus, FilterTags} from '../core/constants';
import { combineReducers } from 'redux';

function currentTag(state = FilterTags.ALL, action){
        switch(action.type){
            case ActionTypes.FILTER_QUESTIONS:
                return action.currentTag;
            default:
                return state;
        }
}

const footer = combineReducers({
    currentTag,
})

export default footer;
