import React from 'react';
import {Alert, Card, Col, Container, Row} from 'react-bootstrap';

const Alerts: React.FC = () => {
    return (
        <Container>
        <Alert variant="secondary">
            <Alert.Heading></Alert.Heading>

            <p>
                Fala galera, beleza?
            Meu nome é Kauê, sou estudante de Ciência da Computação na UNIP Rangel (Santos-SP)
            </p>
            <hr/>
            <p className="mb-0">
                Abaixo estão algumas informações sobre mim.
            </p>
        </Alert>
        </Container>
    )
}
export default Alerts;