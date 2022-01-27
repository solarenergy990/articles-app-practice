import React from 'react';
import s from './Header.module.css';

import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className={s.container}>
      <nav>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>Articles</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <ul className={s.nav}>
                  <li className={s.item}>
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li className={s.item}>
                    <NavLink to="/users">Users</NavLink>
                  </li>
                  <li className={s.item}>
                    <NavLink to="/photos">Photos</NavLink>
                  </li>
                </ul>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
};

export default Header;
