import React from 'react';

import { NavLink } from 'react-router-dom';

class Stuff extends React.Component {
  render() {
    const singleLink = '/single/123456';
    const editLink = '/edit/123456';
    return (
      <div className="Stuff">
        <h3>Stuff</h3>
        <NavLink to={singleLink} className="btn btn-outline-dark nav-item nav-link mb-3">Single</NavLink>
        <NavLink to={editLink} className="btn btn-outline-dark nav-item nav-link">Edit</NavLink>
      </div>
    );
  }
}

export default Stuff;
