import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import logo from './trivia.png';
import './App.css';
import Login from './pages/Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" component={ Login } />
          </Switch>
        </header>
      </div>
    );
  }
}

export default App;
