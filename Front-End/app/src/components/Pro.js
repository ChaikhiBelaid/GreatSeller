import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Image, Button, Col, Card, ListGroup, ListGroupItem} from 'react-bootstrap'
import products from "../products"
import Rating from "./Rating"
function Pro({match}) {
    const product=products.find(pr=>pr._id==match.params.id)
    return (
        <div>
            <Button className="btn btn-light "><Link to='/'>Go back</Link></Button>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid/>
                </Col>

                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroupItem >
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating value={product.rating} text={` ${product.numReviews} reviews`} color="yellow"/>
                        </ListGroupItem>
                        <ListGroupItem>
                            Price : ${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Description : {product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup>
                            <ListGroupItem>
                                <Row>
                                    <Col>Price :</Col>
                                    <Col>
                                         ${product.price}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                                
                            <ListGroupItem>
                                <Row>
                                    <Col>Status : </Col>
                                    <Col>
                                        {product.countInStock>0 ? "In Stock" : "Out Of Stock"}
                                    </Col>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem>
                                <Button className="btn-block" disabled={product.countInStock==0}>Add To Cart</Button>
                            </ListGroupItem>
                        </ListGroup>
                    
                    </Card>
                       
                </Col>
            </Row>
        </div>
    )
}

export default Pro
