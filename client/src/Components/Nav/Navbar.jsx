import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-end;
`
const styleLI = {
  padding: '20px',
  textDecoration: 'none'
}


const NavBar = () => {
  return (
    <>
      <nav>
        <StyledUl>
          <Link style={styleLI} to="/">Home</Link>
          <Link style={styleLI} to="/posts">Posts</Link>
          <Link style={styleLI} to="/write">Write</Link>
        </StyledUl>
      </nav>
    </>
  )
}

export default NavBar