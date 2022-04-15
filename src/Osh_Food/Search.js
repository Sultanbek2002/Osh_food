import React,{useEffect,useState} from "react";
import Meals_ from './Meals'
import axios from "axios"
import { useParams } from "react-router-dom";
export default function Search(){
    const[getSearch,setGetSearch]=useState(null)
    const Param =useParams()
    useEffect(()=>{
        axios.get(`https:www.themealdb.com/api/json/v1/1/search.php?f=${Param.id}`)
        .then((e)=>{
            setGetSearch(e.data.meals)
        })
    },[Param.id])
    return(
        <>
         {getSearch ? <Meals_ text={getSearch}/> : <div className="error">  Nothing found<img className="imgerror" src="https://cdn-icons-png.flaticon.com/512/64/64703.png"/></div>}
        </>
    )
}