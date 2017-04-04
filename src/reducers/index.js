import { combineReducers } from 'redux';
import questions from './questions';
import score from './score';
import form from './form';


const qaApp = combineReducers({
    questions,
    score,
    form
})

export default qaApp;
