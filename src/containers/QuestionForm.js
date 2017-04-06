import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import Question from '../components/Question'
import {addQuestion} from '../actions'
import {hiddenForm} from '../actions'

const QuestionForm = ({isHidden, onAddQuestionClick, onHiddenFormClick}) => {
    if(isHidden)
        return (<div> 
            <button onClick={() => onHiddenFormClick(isHidden)} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">add</i></button>
                            <hr/>
                            
            </div>
        );
    return (
      <div>
          <button onClick={() => onHiddenFormClick(isHidden)} className="btn-floating btn-large waves-effect waves-light red"><i className="material-icons">remove</i></button>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    onAddQuestionClick(e)
                }}
            >
            <Question/>
        <button type="submit" className="btn waves-effect waves-light"><i className="material-icons">note_add</i></button>
            </form>
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
