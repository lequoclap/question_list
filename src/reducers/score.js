import {ActionTypes} from '../core/constants';


export default function score(state = 0, action){
        switch(action.type){
            case ActionTypes.SUBMIT_ANSWER:
            // check fail or true
                return action.answers.length;
            default:
                return state;
        }
}
