import {ActionTypes, FilterTags} from '../core/constants';

const initialState = [
  {
    question: 'Which shoes are the bestseller in 2016?',
    answers: [
        'bitis',
        'nike',
        'Adidas',
        'Thuong dinh'
    ],
    completed: false,
    id: 0,
    right_answer: 'a'
  }
]

export default function questions(state = initialState, action){
        switch(action.type){
            case ActionTypes.ADD_QUESTION:
                return [
                    {
                        question: action.question,
                        answers: action.answers,
                        id: state.reduce((maxId, question)=>{
                            return Math.max(maxId, question.id)
                        }, 0 ) + 1,
                        completed: false,
                        right_answer: action.right_answear
                    }
                    ,...state
                ];
           case ActionTypes.FILTER_QUESTIONS:
                var visibleQuestions = state.filter((question) => {
                    switch(action.currentTag){
                        case FilterTags.ALL:
                            return question
                        case FilterTags.EVEN:
                            if(question.id % 2 == 0)
                                return question
                        case FilterTags.ODD:
                            if(question.id % 2 == 1)
                                return question
                        default:
                            return null
                    }
                })
                
                return visibleQuestions
            default:
                return state;

        }
}
