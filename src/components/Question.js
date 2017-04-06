import React, { PropTypes } from 'react'


function getQuestionView({question, answers,id}){
    let i = 1;
    if(question){
        return (
          <div>
          Question: <br/>
          {question}
          <br/>
          Answer: <br/>
          <ul key={id}>
          {answers.map( answer => {
              return(
                    <li>
                      <input type="radio" name={"question_" + id} id={"question_" +id + "_" + i} 
                      value={i++}/>
                      <label for={"question_" +id + "_" + i}> {answer} </label>
                    </li>
                  )
          })}
          </ul>
          <hr/>
          </div>
        );
    }else{
        return (
            
          <div style={{"width": "500px"}}>
            Question:
            <input className="question" type="text" name="question" />
            <ul>
                Answear A:
                <li><input type="text" name="a" /></li>
                Answear B:
                <li><input type="text" name="b" /></li>
                Answear C:
                <li><input type="text" name="c" /></li>
                Answear D:
                <li><input type="text" name="d" /></li>
            </ul>
          </div>
        );
    }
}


const Question = ({question, answers, id}) => {
    return getQuestionView({question, answers, id});
}

Question.PropTypes = {
    question: PropTypes.string.isRequired,
    answers: PropTypes.array.isRequired
};

export default Question;
