import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import fbconnection from './helpers/data/fbconnection';

import Navbar from './components/navbar';
import Auth from './components/auth';
import Home from './components/home';

import './styles/app.scss';

fbconnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;
    return (
      <div className="App">
        <Navbar authed={authed} />
        {authed ? (<Home />) : (<Auth />)}
      </div>
    );
  }
}

export default App;
