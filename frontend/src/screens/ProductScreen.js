import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, Card, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import products from '../products'

export default function ProductScreen(props) {
    const product = products.find(p => p._id == props.match.params.id)
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'> Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={`#f8e825`} />
                        </ListGroupItem>

                        <ListGroupItem>
                            Price: ${product.price}
                        </ListGroupItem>

                        <ListGroupItem>
                            Description: {product.description}
                        </ListGroupItem>

                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col><strong>$ {product.price}</strong></Col>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col> {product.countInStock > 5 ? 'In Stock' : product.countInStock < 6 && product.countInStock > 1 ? 'Low Stock' : "Out Of Stock"}</Col>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem >
                                <Button className='btn-block' type='button' disabled={product.countInStock == 0}> Add to Cart</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}
