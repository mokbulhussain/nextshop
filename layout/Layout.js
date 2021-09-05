import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {faCoffee, faUser} from '@fortawesome/free-solid-svg-icons'
import {faTachometerAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

function Layout({children}) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">X-Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="text-center" >
                            <Link href="/">
                                <div className="nav-item-div">
                                <FontAwesomeIcon icon={faTachometerAlt} />
                                    Dashboard
                            </div>

                            </Link>
                            </Nav.Link>

                            <Nav.Link className="text-center" >
                            <Link href="/user">
                                <div className="nav-item-div">
                                    <FontAwesomeIcon icon={faTachometerAlt} />
                                    User
                                </div>
                            </Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {children}
        </div>
    );
}

export default Layout;