import React from 'react';
import "./Cuisine.css"
import { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';


function Cuisine() {

    const [cuisine, setCuisine] = useState([]);

    let params = useParams();

    const getCuisine = async (name)=> {
        const data= await fetch (
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&cuisine=${name}&number=20`);
            const recipes = await data.json();
            setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
        //console.log(params.type);
      }, [params.type]);

    return (
        <div className='grid'>
            {cuisine.map((item)=> {
                return (
                <div className='card' key={item.id}>
                    <Link to={"/recipe/"+ item.id}>
                        <img src={item.image} alt="" />
                        <h4> {item.title}</h4>
                    </Link>
                </div>
                )
            })}
        </div>
  )
}

export default Cuisine