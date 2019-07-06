import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import fbconnection from './helpers/data/fbconnection';

import Navbar from './components/navbar';
import Auth from './components/auth';
import Home from './components/home';
import Stuff from './components/stuff';
import New from './components/new';
import Single from './components/single';
import Edit from './components/edit';

import './styles/app.scss';

fbconnection();

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === true
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/auth', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

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
        <BrowserRouter>
          <React.Fragment>
            <Navbar authed={authed} />
            <div className="container">
              <div className="row">
                <Switch>
                  <PublicRoute path="/auth" component={Auth} authed={authed} />
                  <PrivateRoute path="/home" component={Home} authed={authed} />
                  <PrivateRoute path="/stuff/:id" component={Single} authed={authed} />
                  <PrivateRoute path="/stuff" component={Stuff} authed={authed} />
                  <PrivateRoute path="/new" component={New} authed={authed} />
                  <PrivateRoute path="/edit/:id" component={Edit} authed={authed} />

                  <Redirect from="*" to="/auth" />
                </Switch>
              </div>
            </div>

          </React.Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
