import React from 'react'
import { GiNestedHexagons } from 'react-icons/gi'
import { NavLink } from 'react-router-dom'

import classes from './Navbar.css'

function Navbar() {


  return (
    <>
    <div className='nav-main'>
      <div className='logo' onClick={() => window.scroll(0,0)}>
        <GiNestedHexagons className='logo-icon rotate linear infinite' />
        <span className='logo-title'>VMDB</span>
      </div>
      <div className='nav-btns'>
          <NavLink className={`nav-link ${(navData) => navData.isActive ? classes.active : ''}`} to='/search'>SEARCH</NavLink>
          <NavLink className={`nav-link ${(navData) => navData.isActive ? classes.active : ''}`} to='/wlist'>WATCH LIST</NavLink>
          <NavLink className={`nav-link ${(navData) => navData.isActive ? classes.active : ''}`} to='/fav'>FAVORITES</NavLink>
          <NavLink className={`nav-link ${(navData) => navData.isActive ? classes.active : ''}`} to='/about'>ABOUT</NavLink>
      </div>
    </div>
    </>
  )
}

export default Navbar