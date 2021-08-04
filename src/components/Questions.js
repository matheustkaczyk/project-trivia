import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Questions extends Component {
  constructor() {
    super();

    this.xablauzinho = this.xablauzinho.bind(this);
  }

  xablauzinho() {
    const { questions } = this.props;
    return questions.map((question) => {
      <span>{ question.category }</span>;
    });
  }

  render() {
    // eslint-disable-next-line react/prop-types
    const { responseCode } = this.props;
    return (
      <div>
        {
          responseCode === 0
            ? this.xablauzinho()
            : 'Token expirado'
        }
      </div>
    );
  }
}

Questions.propTypes = {
  questions: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
    correctanswer: PropTypes.arrayOf(PropTypes.string),
    incorrectanswer: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};
export default Questions;

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
