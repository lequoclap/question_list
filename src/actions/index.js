import {ActionTypes} from '../core/constants';

let nextQuestionId = 1;

export const showCreateQuestionForm = () =>{
    return {
        type: ActionTypes.SHOW_CREATE_QUESTION_FORM
    }
}  
export const addQuestion = (question) =>({
        type: ActionTypes.ADD_QUESTION,
        question: question.question,
        answers:question.answers,
        id: nextQuestionId++,
        completed: false,
        right_answer: question.right_answer
})

export const submitAnswer = (answers) => (
    {
           type:ActionTypes.SUBMIT_ANSWER,
           answers:answers
    })

    
export const hiddenForm = (isHidden) => (
    {
           type:ActionTypes.HIDDEN_FORM,
           isHidden: isHidden
    })
    
    
