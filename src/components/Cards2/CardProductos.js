import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';



const CardProductos = ({ productos }) => {


    return (
        <div className="col-4 mb-3">
        <Card>
            <Card.Title className="text-center">{productos.reference}</Card.Title>
            <img src={productos.image} alt={productos.reference} className="card-img-top image-card" />
            <Card.Body>
                <ListGroup className="mb-2">
                    <ListGroupItem><strong>MODELO: </strong>{productos.model}</ListGroupItem>
                    <ListGroupItem><strong>MARCA: </strong>{productos.trademark}</ListGroupItem>
                    <ListGroupItem><strong>PRECIO: </strong>{productos.price}</ListGroupItem>
                </ListGroup>
                
            </Card.Body>
        </Card>
    </div>
    )
}

export default CardProductos
