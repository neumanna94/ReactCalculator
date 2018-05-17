import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(){
  return(
    <navbar>
      <style jsx>{`
        navbar a {
          text-decoration: none;
          color: white;
          margin-right: 5%;
          margin-left: 7.5%;
        }
        navbar a:hover {
          color: red;
        }
      `}</style>
      <Link to="/Calculator"> Calculator </Link><Link to="/AlgCalculator"> Alg. Calculator </Link><Link to="/History"> History </Link>
    </navbar>
  );
}

export default Navbar;
