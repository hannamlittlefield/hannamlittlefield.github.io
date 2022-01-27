import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const StyledNavBar = styled(Navbar)`
  border-radius: 3px;
`;

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  font-family: 'Lobster', cursive;
  &:hover {
      color: #9fa8da;
      -webkit-transition: color .5s linear;
      -moz-transition: color .5s linear;
      -ms-transition: color .5s linear;
      -o-transition: color .5s linear;
      transition: color .5s linear;
    }
`

export default function NavTopbar(){
    return (
      <div style={{ display: 'block', width: 700, padding: 30 }}>
      <StyledNavBar bg="#ede7f6" className='nav' fixed='top'>
        <StyledLink to="/about">Home</StyledLink>
        <StyledLink to="/projects">Projects</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
      </StyledNavBar>
    </div>
  );
}