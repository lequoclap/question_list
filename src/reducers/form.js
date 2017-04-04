import {ActionTypes, FormStatus} from '../core/constants';
import { combineReducers } from 'redux';

function isHidden(state = FormStatus.APPEAR, action){
        switch(action.type){
            case ActionTypes.HIDDEN_FORM:
                return !action.isHidden;
            default:
                return state;
        }
}

const form = combineReducers({
    isHidden,
})

export default form;
