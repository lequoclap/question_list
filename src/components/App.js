import React from 'react';
import QuestionForm from '../containers/QuestionForm'
import QuestionList from '../containers/QuestionList'
import Score from '../containers/Score'
import Footer from '../containers/Footer'
const App = () => (
  <div>
    <Score/>
    <QuestionForm />
    <QuestionList />
    <Footer />
  </div>
);

export default App;
