import React from "react"
import Home from "./Home"
import Cards from "./Navbar"
import Meals_ from "./Meals"
import Main_Cards from "./MainCards"
import InCards from "./inCards"
import NextCard from "./NextCard"
import Search from './Search'
import Basket from "./Basket"
import { BrowserRouter, Route, Routes } from "react-router-dom";
export default function Main(props) {
    return (
        <>
            <BrowserRouter>
                <Home/>
                <Routes>
                    <Route path="/" element={<Cards />} />
                    <Route path="/CategoryMeals/:id" element={<Main_Cards/>}/>
                    <Route path="/InCards/:id" element={<InCards/>}/>
                    <Route path="/nextCard/:id" element={<NextCard/>}/>
                    <Route path="/Basket" element={<Basket/>}/>
                    <Route path="/Search/:id" element={<Search/>}/>
                </Routes>
            </BrowserRouter>,
        </>
    )
}