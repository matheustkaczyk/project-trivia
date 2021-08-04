import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Questions from '../components/Questions';

class Game extends Component {
  constructor() {
    super();

    this.state = {
      questions: [],
      loading: true,
      responseCode: null,
    };

    this.fetchTokenQuestions = this.fetchTokenQuestions.bind(this);
  }

  componentDidMount() {
    this.fetchTokenQuestions();
  }

  fetchTokenQuestions() { // pegar o token
    const { token } = this.props;
    try {
      const url = `https://opentdb.com/api.php?amount=5&token=${token}`;
      fetch(url)
        .then((response) => response.json())
        // .then((data) => console.log(data.response_code));
        .then((data) => this.setState({
          questions: data.results,
          loading: false,
          responseCode: data.response_code,
        }));
      // const { questions } = this.state;
      // console.log(questions);
    } catch (erro) {
      console.error(erro);
      return 'Erro no fetch das perguntas';
    }
  }

  render() {
    const { questions, loading, responseCode } = this.state;

    return (
      <div>
        <Header />
        <div>
          {
            loading
              ? 'Carregando...'
              : <Questions responseCode={ responseCode } questions={ questions } />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.tokenReducer.token,
});

Game.propTypes = {
  token: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Game);
