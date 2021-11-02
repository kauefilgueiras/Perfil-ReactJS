import React from 'react';
import { Navbar, Container, Nav, NavDropdown,Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import './index.css';

const Photo: React.FC = () => {
    return (
        <Container className="d-flex justify-content-around">
            <Row>
                <Col>
                    <Image className="foto" src="https://www.kindpng.com/picc/m/364-3647671_software-developer-computer-servers-web-others-software-developer.png" roundedCircle />
                    <h1 style={{textAlign: 'center'}}>Kauê Santos Filgueiras</h1>
                </Col>
            </Row>
        </Container>
        
    );
  
}
export default Photo;
