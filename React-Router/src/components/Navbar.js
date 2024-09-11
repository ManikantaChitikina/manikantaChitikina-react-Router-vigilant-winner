import React from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useAuth } from './auth';
const Navbar = () => {
const navLinkStyle=({isActive})=>{
    return{
        fontWeight:isActive?'bold':'normal',
        textDecoration:isActive?'none':'underline'
    }

}
const auth =useAuth();
  return (
    //     <nav>
    //   <Link to='/'>Home</Link>
    //   <Link to='/about'>About</Link>
    //   </nav>
    // <nav>
    // <NavLink to='/'>Home</NavLink>
    // <NavLink to='/about'>About</NavLink>
    // </nav>
    <nav>
    <NavLink style={navLinkStyle} to='/'>Home</NavLink>
    <NavLink style={navLinkStyle} to='/about'>About</NavLink>
    <NavLink style={navLinkStyle} to='/products'>Products</NavLink>
    <NavLink style={navLinkStyle} to='/profile'>Profile</NavLink>
    {!auth.user&& (
      <NavLink style={navLinkStyle} to='/login'>Login</NavLink>
    )}
    </nav>
  
  
    
  )
}

export default Navbar
