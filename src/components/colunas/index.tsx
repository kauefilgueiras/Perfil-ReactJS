import React from 'react';
import {Card, Col, Container, Row} from 'react-bootstrap';


const Column: React.FC = () => {
    return (

        <div className="d-flex center-content-around">
            <Container>
                <Row>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Projetos</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li><a href ="https://github.com/kauefilgueiras">Github</a></li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Formação</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Bacharel em Ciencias da computação na UNIP Rangel (Santos-SP)</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Informações Pessoais</Card.Title>
                                <Card.Text>
                                    Estou no 4º Semestre de Ciencias da computação, e meu foco principal é a especialização voltada a desenvolvimento Back-end.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{width: '18rem'}}>
                            <Card.Body>
                                <Card.Title>Experiencia</Card.Title>
                                <Card.Text>
                                    <ul>
                                        <li>Breves conhecimentos em HTML, Css, e Javascript.</li>
                                        <li>Experiencia com Java, incluindo Frameworks como Hibernate e Spring Boot </li>
                                        <li>Conhecimentos basicos de Node.JS e React.JS</li>
                                        <li>Breves conhecimentos em Python</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default Column;