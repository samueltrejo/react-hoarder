import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import { NavLink } from 'react-router-dom';

class Navbar extends React.Component {
  logout = (event) => {
    event.preventDefault();
    firebase.auth().signOut();
  }

  render() {
    const { authed } = this.props;
    const { logout } = this;
    return (
      <div className="Navbar">
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
          <button className="btn navbar-brand">React Hoarder</button>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              {authed ? (
                <div className="navbar-nav">
                  <NavLink to="/home" className="btn nav-item nav-link">Home</NavLink>
                  <NavLink to="/stuff" className="btn nav-item nav-link">Stuff</NavLink>
                  <NavLink to="/new" className="btn nav-item nav-link">New</NavLink>
                  <button className="btn nav-item nav-link" onClick={logout}>Logout</button>
                </div>
              ) : (<div className="navbar-nav"></div>)}
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
