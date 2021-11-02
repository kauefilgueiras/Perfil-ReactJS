import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col, Card, Button } from 'react-bootstrap';

const Header: React.FC = () => {
    return (
        <Container>
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Navbar.Brand href="#">Meu Perfil</Navbar.Brand>
                </Container>
            </Navbar>
        </Container>
    )
}
export default Header;