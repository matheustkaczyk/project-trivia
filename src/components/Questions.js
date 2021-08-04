import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import fetchToken from '../services/fetchToken';
import { actionToken } from '../redux/actions';

class Questions extends Component {
  constructor() {
    super();

    this.state = {
      index: 0,
    };

    this.createQuestions = this.createQuestions.bind(this);
  }

  validateToken() {
    const { getToken } = this.props;
    localStorage.clear();
    fetchToken();
    getToken(localStorage.getItem('token'));
    this.createQuestions();
  }

  createQuestions() {
    const { index } = this.state;
    const { questions } = this.props;
    const ans = [...questions[index].incorrect_answers];
    console.log(ans);
    return (
      <div>
        <p data-testid="question-category">{questions[index].category}</p>
        <p data-testid="question-answer">{questions[index].question}</p>
        <div>
          <button
            data-testid="correct-answer"
            key={ index }
            type="button"
          >
            { questions[index].correct_answer }
          </button>
          { ans.map((question) => (
            <button
              data-testid={ `wrong-answer-${index}` }
              type="button"
              key={ index }
            >
              { question }
            </button>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { responseCode } = this.props;
    console.log(responseCode);
    const three = 3;
    return (
      <div>
        {
          responseCode === three
            ? 'Token expirado'
            : this.createQuestions()
        }
      </div>
    );
  }
}

Questions.propTypes = {
  responseCode: PropTypes.string.isRequired,
  questions: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
    correctanswer: PropTypes.arrayOf(PropTypes.string),
    incorrectanswer: PropTypes.arrayOf(PropTypes.string),
    map: PropTypes.func,
  }).isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  getToken: (token) => dispatch(actionToken(token)),
});

export default connect(null, mapDispatchToProps)(Questions);

// Pergunta de verdadeiro ou falso
// {
//   "response_code":0,
//   "results":[
//      {
//         "category":"Entertainment: Video Games",
//         "type":"boolean",
//         "difficulty":"hard",
//         "question":"TF2: Sentry rocket damage falloff is calculated based on the distance between the sentry and the enemy, not the engineer and the enemy",
//         "correct_answer":"False",
//         "incorrect_answers":[
//            "True"
//         ]
//      }
//   ]
// }

// Pergunta de múltipla escolha
// {
//   "response_code":0,
//   "results":[
//      {
//         "category":"Entertainment: Video Games",
//         "type":"multiple",
//         "difficulty":"easy",
//         "question":"What is the first weapon you acquire in Half-Life?",
//         "correct_answer":"A crowbar",
//         "incorrect_answers":[
//            "A pistol",
//            "The H.E.V suit",
//            "Your fists"
//         ]
//      }
//   ]
// }
