import styled from 'styled-components';
import { Navbar } from 'rsuite';
import { Link } from 'react-router-dom';

export const HeaderStyled = styled.header`
  font-family: 'Manrope', sans-serif;
  margin-top: 10px;
  margin-bottom: 150px;
`;

export const StyledNavbar = styled(Navbar)`
  background-color: #3470ff;
  border-radius: 20px;

  a:active,
  a:focus,
  a:hover {
    color: white;
    text-decoration: none;
  }
`;

export const StyledNavLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:active {
    color: white;
  }

  &:visited {
    color: white;
  }
`;
