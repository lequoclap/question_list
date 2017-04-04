import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Question from '../components/Question'
import {addQuestion} from '../actions'
import {hiddenForm} from '../actions'


const QuestionForm = ({isHidden, onAddQuestionClick, onHiddenFormClick}) => {
    if(isHidden)
        return (<div> 
            <button onClick={() => onHiddenFormClick(isHidden)} > Appear form</button>
                            <hr/>
            </div>
        );
    return (
      <div>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    onAddQuestionClick(e)
                }}
            >
            <Question/>
            <input type="submit" value="Add" />
            </form>
          <button onClick={() => onHiddenFormClick(isHidden)}> Hidden form</button>
                     <hr/>
    </div>
    );
}
QuestionForm.propTypes = {
  onAddQuestionClick: PropTypes.func.isRequired,
  isHidden: PropTypes.bool.isRequired,
  onHiddenFormClick: PropTypes.func,
}

const mapStateToProps = (state, ownProps) => {
    return {
        isHidden: state.form.isHidden
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddQuestionClick: (evt) => {
            let question = {
                question:evt.target.querySelector('input[name="question"]').value,
                answers:[
                    evt.target.querySelector('input[name="a"]').value,
                    evt.target.querySelector('input[name="b"]').value,
                    evt.target.querySelector('input[name="c"]').value,
                    evt.target.querySelector('input[name="d"]').value
                ]
            }
            //reset all input
            var allInput =evt.target.querySelectorAll('input:not([type="submit"])')
            allInput.forEach(function(element) {
                element.value = "";
            }, this);

            dispatch(addQuestion(question))
        },
        onHiddenFormClick: (isHidden) => {
            dispatch(hiddenForm(isHidden));
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(QuestionForm)
