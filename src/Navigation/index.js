// base libraries
import React from 'react';
import { NavLink }  from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = props => (
  <nav className="main-nav">
    <ul>
      <li><NavLink  onClick={props.handleNav} to='/celebrities'>Celebrities</NavLink></li>
      <li><NavLink  onClick={props.handleNav} to='/anime'>Anime</NavLink></li>
      <li><NavLink  onClick={props.handleNav} to='/sports'>Sports</NavLink></li>
      <li><NavLink  to='/search'>Search</NavLink></li>
    </ul>
  </nav>
)

Navigation.propTypes = {
  handleNav : PropTypes.func.isRequired
}


export default Navigation;
