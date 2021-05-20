import React, {useRef, Fragment} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';



const Nav = () => {
  const navStyle = {
    color: 'white'
  };

  return (
    <Fragment>
      <nav className='nav'>
        <Link className='navLink' to="/" style={navStyle}>
      <div className='logo'>GLAZE</div>
      </Link>
      <div className='links'>
        <Link className='navLink' to="/fire" style={navStyle}>
      <div className='fire'>Let's Fire</div>
      </Link>
      <Link className='navLink' to="/glaze" style={navStyle}>
      <div className='glaze'>Let's Glaze</div>
      </Link>
      </div>

      </nav>

    </Fragment>
  )
}

export default Nav;