import React, { useEffect, useState } from 'react'
import { NavDropdown, Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap'
import axios from "axios"
import {Link} from "react-router-dom"
export default function Home() {
  const [Categories, setCategories] = useState([])
  const [textSearch,setTextSearch]=useState("")
  useEffect(() => {
    axios.get("https:www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then(e => {
        setCategories(e.data.meals)
      })
  }, [])
  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/Basket">Basket</Link></Nav.Link>
              <NavDropdown title="Categorioes" id="navbarScrollingDropdown">
                {
                  Categories && Categories.map((e) => {
                    return (
                      <>
                        <NavDropdown.Item as={Link} to={`/CategoryMeals/${e.strArea}`}>{e.strArea}</NavDropdown.Item>
                      </>
                    )
                  })
                }
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>{setTextSearch(e.target.value)}}
              />
              <Button variant="outline-success" onClick={()=>{setTextSearch("")}} as={Link} to={textSearch == "" ? "/" : `/Search/${textSearch}`}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}