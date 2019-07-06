import React from 'react';

class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button className="navbar-brand">React Hoarder</button>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <button className="nav-item nav-link active">Home <span className="sr-only">(current)</span></button>
              <button className="nav-item nav-link">Features</button>
              <button className="nav-item nav-link">Pricing</button>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
