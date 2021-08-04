import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { actionToken } from '../redux/actions';

function fetchToken() {
  const { getToken } = this.props;
  const url = 'https://opentdb.com/api_token.php?command=request';
  try {
    fetch(url)
      .then((response) => response.json())
      .then((data) => (
        localStorage.setItem('token', data.token)
      ));
    getToken(localStorage.getItem('token'));
  } catch (err) {
    console.error(err);
    return 'Api não encontrada';
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: (token) => dispatch(actionToken(token)),
});

fetchToken.propTypes = {
  getToken: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(fetchToken);
// tenho que dispachar o token daqui
