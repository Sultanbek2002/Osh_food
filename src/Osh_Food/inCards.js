import React,{useState,useEffect} from "react"
import axios from "axios"
import {useParams} from "react-router-dom"
import Meals_ from "./Meals"
export default function InCards(props){
    const [Card,setCard]=useState(null)
    const Param=useParams()
    useEffect(()=> {
        console.log(Param.id)
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${Param.id}`)
            .then(e => {
            setCard(e.data.meals)
               
            })
    }, [Param])
    return(
        <>
        <Meals_  text={Card}/>
        </>
    )
}