import React, { useState, useEffect } from "react"
import axios from "axios"
import { Card, Button, Row,Col } from "react-bootstrap"
import { useParams } from "react-router"
import ReactPlayer from 'react-player'

export default function NextCard() {
    const [Card_, setCard] = useState(null)
    const Param = useParams()
    useEffect(() => {
        axios.get(`https:www.themealdb.com/api/json/v1/1/lookup.php?i=${Param.id}`)
            .then(e => {
                setCard(e.data.meals)
            })
    }, [Param])
    return (
        <>
            {
                Card_ && Card_.map((e) => {
                    return (
                        <>
                            <Card className="text-center mt-5">
                                <Card.Header><Card.Img variant="top" src={e.strMealThumb} className="CardInImg" /></Card.Header>
                                <Card.Body>
                                    <Card.Title>Instruction</Card.Title>
                                    <Card.Text>
                                        {e.strInstructions}
                                    </Card.Text>
                                    <Button variant="primary">To basket</Button>
                                </Card.Body>
                            </Card>
                            <Row className="ROW_NEXT_CARD align-content-center">
                                <Col sm={12} md={6}>
                                    <ReactPlayer url={e.strYoutube} width="100%"/>
                                </Col>
                                <Col sm={12} md={6}>
                                <Card.Title>Ingridients of {e.strCategory}</Card.Title>
                                    <Card.Text>
                                        {e.length}
                                    </Card.Text>
                                </Col>
                            </Row>
                        </>
                    )
                })
            }
        </>
    )
}