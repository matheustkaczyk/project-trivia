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
        .then((data) => this.setState({ questions: data.results, loading: false }));
      const { questions } = this.state;
      console.log(questions);
    } catch (erro) {
      console.error(erro);
      return 'Erro no fetch das perguntas';
    }
  }

  render() {
    const { questions, loading } = this.state;

    return (
      <div>
        <Header />
        <div>
          {
            loading ? 'Carregando...' : <Questions questions={ questions } />
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
