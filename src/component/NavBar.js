import React from 'react'
import { NavLink } from 'react-router-dom'

 function NavBar() {
 
  return (
    <ul>
    <li >
         <NavLink to='/'>Gallery</NavLink>
    </li>
    <li>
         <NavLink to='/Timeline.js'>Timeline</NavLink>
    </li>
    <li>
        <NavLink to='/About.js'>About</NavLink>
    </li>
    <li>
        <NavLink to='/Contact.js'>Contact</NavLink>
    </li>
    </ul>
  )
}
export default NavBar