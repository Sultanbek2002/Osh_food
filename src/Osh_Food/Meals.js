import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import TextTruncate from 'react-text-truncate';
import { useParams } from "react-router-dom"
import { Card, Button, Container, Row, Col } from 'react-bootstrap'
export default function Meals_(props) {
    const [Basket, setBasket] = useState(JSON.parse(localStorage.getItem("basket")) || [])
    function Go_basket(e) {
        if(Basket.find(r => r.idMeal == e.idMeal)){
            setBasket(o => o.filter(b=>b.idMeal !== e.idMeal))
            console.log(Basket)
        }else{
            setBasket(r => [...r, e])
        }
        
    }
    useEffect(() => {
        localStorage.setItem("basket", JSON.stringify(Basket))
    }, [Basket])

    return (
        <>
            <Container>
                <Row className="RowMeals">
                    {
                        props.text && props.text.map((e) => {
                            return (
                                <>
                                    <Col md={3} sm={12}>
                                        <Card className="mt-5" style={{ boxShadow: "2px 2px 2px red" }}>
                                            <Link to={`/nextCard/${e.idMeal}`}>
                                                <Card.Img variant="top" src={e.strMealThumb} />
                                                <Card.Body>
                                                    <TextTruncate
                                                        line={1}
                                                        element="span"
                                                        truncateText="…"
                                                        text={e.strMeal}
                                                        textTruncateChild={<a href="#">Read on</a>}
                                                    />
                                                </Card.Body>
                                            </Link>
                                            <Button variant={Basket.find(r => r.idMeal == e.idMeal)? 'danger' : "info"} onClick={() => Go_basket(e)}>{Basket.find(r => r.idMeal == e.idMeal)? "Remove basket" : "To basket"}</Button>
                                        </Card>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    )
}