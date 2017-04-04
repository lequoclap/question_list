import React from 'react';
import { connect } from 'react-redux';
import Question from '../components/Question';
import {submitAnswer} from '../actions';
import {FilterTags} from '../core/constants';


const QuestionList = ({questions, currentTag, submitAnswer}) => {
    var visibleQuestions = questions.filter((question) => {

                    switch(currentTag){
                        case FilterTags.ALL:
                            return question
                        case FilterTags.EVEN:
                                return (question.id % 2 == 0)
                        case FilterTags.ODD:
                                return (question.id % 2 == 1)
                    }
                })
    return (
    <div>
        <form
            onSubmit={e => {
                e.preventDefault()
                submitAnswer(e)
            }}
        >
        {visibleQuestions.map(question => {
            return(
            <Question
                question={question.question}
                answers={question.answers}
                id={question.id}
            />
            )
        })}

        <input class="waves-effect waves-light btn" type="submit" value="Submit" />
        </form>
    </div>
)};


const mapStateToProps = (state, ownProps) => {
    return {
        questions: state.questions,
        currentTag: state.footer.currentTag
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        submitAnswer: (evt) => {
            var answers = [];
            var questions = evt.target.querySelectorAll('ul');
            for(var i = 0; i < questions.length; i++){
                var answer = evt.target.querySelector('input[name=question_'+ i +']:checked').value;    
                answers.push(answer);
            }    
            dispatch(submitAnswer(answers))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionList)