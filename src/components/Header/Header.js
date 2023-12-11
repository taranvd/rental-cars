import { Nav } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { HeaderStyled, StyledNavbar, StyledNavLink } from './Header.styled';

const Header = () => (
  <HeaderStyled>
    <StyledNavbar appearance="inverse">
      <StyledNavbar.Brand>RENTAL CARS</StyledNavbar.Brand>
      <Nav>
        <Nav.Item as={StyledNavLink} to="/" icon={<HomeIcon />}>
          Home
        </Nav.Item>
        <Nav.Item as={StyledNavLink} to="catalog">
          Catalog
        </Nav.Item>
        <Nav.Item as={StyledNavLink} to="favorite">
          Favorite
        </Nav.Item>
        <Nav.Menu title="About">
          <Nav.Item>Company</Nav.Item>
          <Nav.Item>Team</Nav.Item>
          <Nav.Menu title="Contact">
            <Nav.Item>Via email</Nav.Item>
            <Nav.Item>Via telephone</Nav.Item>
          </Nav.Menu>
        </Nav.Menu>
      </Nav>
    </StyledNavbar>
  </HeaderStyled>
);

export default Header;
