import React, { useState, useEffect } from "react"
import { Container, Row, Col, Card, Carousel } from "react-bootstrap"
import axios from 'axios'
import { Link } from "react-router-dom"
export default function Cards() {
    const [Meals, setMeals] = useState(null)
    useEffect(() => {
        axios.get("https:www.themealdb.com/api/json/v1/1/categories.php")
            .then(e => {
                setMeals(e.data.categories)
            })
    }, [])
    return (
        <>
            <Container className="mt-5">
                <Row className="d-flex justify-content-center">
                    {
                        Meals && Meals.map((e) => {
                            return (
                                <>
                                    <Col md={4} sm={12} >
                                        <Card style={{ width: '18rem' }} className="mt-2">
                                            <Link to={`/InCards/${e.strCategory}`} >
                                                <Card.Img variant="top" src={e.strCategoryThumb} />
                                                <Card.Body>
                                                    <Card.Title>{e.strCategory}</Card.Title>
                                                </Card.Body>
                                            </Link>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })
                    }

                </Row>
                {/* <Row>
                    <Col sm={12} md={6}>
                        <Carousel>
                            <Carousel.Item>
                                    {
                                                    Meals && Meals.map((e) => {
                                        return (
                                            <>
                                             <img
                                                className="d-block w-100"
                                                src={e.strCategoryThumb}
                                                alt="First slide"
                                                />
                                            </>
                                        )
                                    })
                                    }
                                <Carousel.Caption>
                                    <h3>First slide label</h3>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col sm={12} md={6}></Col>
                </Row> */}

            </Container>
        </>
    )
}