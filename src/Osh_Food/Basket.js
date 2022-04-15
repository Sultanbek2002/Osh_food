import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card, Button, Col, Row, Form } from "react-bootstrap"
export default function Basket() {
  const [getBasket, setGetBasket] = useState(JSON.parse(localStorage.getItem("basket")))
  const token = "bot5219945826:AAFwiBNkzdI8NGEawSpKMigQlo0wgVMzplE"
  const [firstInput, setFirstInput] = useState("")
  const [secondInput, setSecondInput] = useState("")
  const [thirdInput, setThirdInput] = useState("")
  const Send_TELEGRAMM = () => {
    axios.get(`https://api.telegram.org/${token}/sendMessage`, {
      params: {
        parse_mode: "HTML",
        chat_id: "5017743732",
        text: `<i>Name:</i> ${firstInput}\n <i>Password:</i> ${secondInput}\n <i>Comment:</i> ${thirdInput}`,
      }
    })
  }
  function Check() {
    Send_TELEGRAMM()
    console.log("Hello")
  }
  return (
    <>
      <Row>
        <Col md={8} sm={12} className="" style={{ position: "relative" }}>
          <Row className="justify-content-center">
            {
              getBasket && getBasket.map((e) => {
                return (
                  <>
                    <Col sm={12} md={4}>
                      <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={e.strMealThumb} />
                        <Card.Body>
                          <Card.Title>{e.strMeal}</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </Col>

                  </>
                )
              })
            }
          </Row>
        </Col>
        <Col sm={12} md={4} className="" style={{ marginTop: "80px", position: "fixed", right: "0px" }}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label >Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => { setFirstInput(e.target.value) }} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => { setSecondInput(e.target.value) }} />
            </Form.Group>
          </Form>
          <Form className="mt-5">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                onChange={(e) => { setThirdInput(e.target.value) }} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            {getBasket && getBasket.map((e) => {
              return (
                <>
                  <Form.Check type="checkbox" label={e.strMeal} />
                </>
              )
            })}
          </Form.Group>
          <Button variant="dark" onClick={() => { Check() }} >
            Submit
          </Button>
        </Col>
      </Row>
    </>
  )
}