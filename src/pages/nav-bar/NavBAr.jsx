import React from 'react'
import { NavLink } from "react-router-dom";
import cl from './NavBAr.module.css';

const NavBAr = () => {
  return (
    <nav className={cl.boxNav}>
      <h4>Navigation</h4>
      <ul>
        <li><NavLink className='navLink' to={`/`}>Hom page</NavLink></li>
        <li><NavLink className='navLink' to={`/posts`}>Posts</NavLink></li>
        <li><NavLink className='navLink' to={`/about`}>About</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavBAr