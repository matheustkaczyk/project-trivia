import React from 'react';
import { connect } from 'react-redux';
import { func } from 'prop-types';
import { actionDisabled } from '../redux/actions';

class Timer extends React.Component {
  constructor() {
    super();
    this.state = {
      timer: 1,
    };
  }

  componentDidMount() {
    this.setTimer();
  }

  setTimer() {
    const second = 1000;
    this.setState({
      timer: 30,
    });
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer - 1,
      }));
    }, second);
  }

  render() {
    const { timer } = this.state;
    const { setDisabled } = this.props;
    if (timer === 0) {
      clearInterval(this.myInterval);
      setDisabled(true);
    }
    return timer;
  }
}

const mapDispatchToProps = (dispatch) => ({
  setDisabled: (isDisabled) => dispatch(actionDisabled(isDisabled)),
});

Timer.propTypes = {
  setDisabled: func.isRequired,
};

export default connect(null, mapDispatchToProps)(Timer);
