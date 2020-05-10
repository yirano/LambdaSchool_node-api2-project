import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/write">Write</Link>
      </ul>
    </nav>
  )
}

export default NavBar