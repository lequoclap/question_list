import React from 'react';
import { connect } from 'react-redux';
import Question from '../components/Question';
import {submitAnswer} from '../actions';


const QuestionList = ({questions, submitAnswer}) => (
    <div>
        <form
            onSubmit={e => {
                e.preventDefault()
                submitAnswer(e)
            }}
        >
        {questions.map(question => {
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
);


const mapStateToProps = (state, ownProps) => {
    return {
        questions: state.questions
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