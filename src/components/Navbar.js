import React from 'react'
import { GiNestedHexagons } from 'react-icons/gi'
import { NavLink, Link } from 'react-router-dom'
import { ClassNames } from '@emotion/react'

import classes from './Navbar.css'

function Navbar() {
  

  return (
    <>
    <div className='nav-main'>
      <div className='logo'>
        <GiNestedHexagons className='logo-icon rotate linear infinite' />
        <span className='logo-title'>VMDB</span>
      </div>
      <div className='nav-btns'>
          <NavLink className={(navData) => navData.isActive ? classes.active : ''} className='nav-link' to='/search'>SEARCH</NavLink>
          <NavLink className={(navData) => navData.isActive ? classes.active : ''} className='nav-link' to='/wlist'>WATCH LIST</NavLink>
          <NavLink className={(navData) => navData.isActive ? classes.active : ''} className='nav-link' to='/fav'>FAVORITES</NavLink>
          <NavLink className={(navData) => navData.isActive ? classes.active : ''} className='nav-link' to='/about'>ABOUT</NavLink>
      </div>
    </div>
    </>
  )
}

export default Navbar