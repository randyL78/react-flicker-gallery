// base libraries
import React from 'react';
import { NavLink }  from 'react-router-dom';

const Navigation = () => (
  <nav className="main-nav">
    <ul>
      <li><a href='/celebrities'>Celebrities</a></li>
      <li><a href='/anime'>Anime</a></li>
      <li><a href='/sports'>Sports</a></li>
      <li><a href='/search'>Search</a></li>
    </ul>
  </nav>
)

export default Navigation;
