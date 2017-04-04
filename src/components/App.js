import React from 'react';
import QuestionForm from '../containers/QuestionForm'
import QuestionList from '../containers/QuestionList'
import Score from '../containers/Score'

const App = () => (
  <div>
    <Score/>
    <QuestionForm />
    <QuestionList />
  </div>
);

export default App;
