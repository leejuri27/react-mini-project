import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap';
import {Link} from 'react-router-dom'

const Header = () => {



  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src="../img/ju.png"
              width="100"
              height="27"
              className="d-inline-block align-top"
              margin-top = '100'
              style={{marginTop: 5}}
            />
          </Navbar.Brand>

          <Nav className="me-auto">
            <Link to="/" className='link-item'>Home</Link>
            <Link to="/" className='link-item'>Movies</Link>
          </Nav>
        </Container>

        <Form className="d-flex me-3">
                  <Form.Control
                    data-bs-theme = "light"
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    
                  />
                  <Button variant="outline-danger">Search</Button>
                </Form>
      </Navbar>


    </div>
  )
}

export default Header