import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { IconContext } from 'react-icons';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="navigation">
    <Navbar variant="dark" expand="lg">
      <Navbar.Brand className="home-icon">
        <IconContext.Provider value={{ color: '#0abf53' }}>
          <Link to={'/'}>
            <FaHome />
          </Link>
        </IconContext.Provider>
      </Navbar.Brand>
      <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <Nav.Link>
            <Link to={'/'}>Home</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/locations">Locations</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/flights">Check Flights</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
);

export default Navigation;
