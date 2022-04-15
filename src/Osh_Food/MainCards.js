import React,{useState,useEffect} from "react"
import Meals_ from "./Meals"
import { useParams } from "react-router"
import axios from "axios"
export default function Main_Cards(){
    const Param = useParams()
    const [Card, setCard] = useState([])
    useEffect(() => {
        axios.get(`https:www.themealdb.com/api/json/v1/1/filter.php?a=${Param.id}`)
            .then(e => {
                setCard(e.data.meals)
            })
    }, [Param])
    return(
        <>
        <Meals_ text={Card}/>
        </>
    )
}