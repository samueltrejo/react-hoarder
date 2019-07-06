import React from 'react';

import { Link } from 'react-router-dom';

class Stuff extends React.Component {
  render() {
    const singleLink = '/stuff/123456';
    const editLink = '/edit/123456';
    return (
      <div className="Stuff">
        <h3>Stuff</h3>
        <Link to={singleLink} className="btn btn-outline-dark nav-item nav-link mb-3">Single</Link>
        <Link to={editLink} className="btn btn-outline-dark nav-item nav-link">Edit</Link>
      </div>
    );
  }
}

export default Stuff;
