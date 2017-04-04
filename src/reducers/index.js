import { combineReducers } from 'redux';
import questions from './questions';
import score from './score';
import form from './form';
import footer from './footer';


const qaApp = combineReducers({
    questions,
    score,
    form,
    footer,
})

export default qaApp;
