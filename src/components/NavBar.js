import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
      <NavLink to="/" className="navLink">Home</NavLink> 
      <NavLink to="/movies" className="navLink">Movies</NavLink> 
      <NavLink to="/directors" className="navLink">Directors</NavLink> 
      <NavLink to="/actors" className="navLink">Actors</NavLink> 
    </div>
  );
}

export default NavBar;