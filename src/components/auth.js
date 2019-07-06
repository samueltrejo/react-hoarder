import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

class Auth extends React.Component {
  loginGoogle = (event) => {
    event.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  }

  render() {
    const { loginGoogle } = this;
    return (
      <div>
        <h3>Auth</h3>
        <button className="btn btn-dark" onClick={loginGoogle}>Google Login</button>
      </div>
    );
  }
}

export default Auth;
