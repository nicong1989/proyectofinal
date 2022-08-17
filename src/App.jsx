import React from 'react'
import { Container } from 'react-bootstrap';
import ListProductos from './components/ListProductos';

const App = () => {
    return (
        <Container fluid>
            <h2 className="text-center">Prueba de productos con JSON SERVER Y AXIOS</h2>
            <ListProductos />
        </Container>
    )
}

export default App;
