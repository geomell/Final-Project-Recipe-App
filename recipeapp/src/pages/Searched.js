import React from 'react';
import "./Searched.css"
import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';



function Searched() {

    const [searchedRecipes, setSearchedRecipes]= useState ([]);
    let params = useParams ();

    const noRecipes = searchedRecipes.status || searchedRecipes.message;
    
    const getSearched = async (name) => {
        const data = await fetch (
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&number=20&query=${name}`);
        const recipes = await data.json();
        if (recipes.status === 404) {
            setSearchedRecipes([]);
            return;
        }
        setSearchedRecipes (recipes.results);
        
    };

   

    useEffect(()=> {
        getSearched(params.search);
    },[params.search]);

  return (
    <div className='grid'>
        {!noRecipes ? (searchedRecipes.map((item)=>{
            return (
                <div className='card' key={item.id}>
                    <Link to={'/recipe/'+item.id}>
                    <img src={item.image} alt={item.title} />
                    <h4> {item.title}</h4>
                    </Link>
                </div>
            )

        })):(
            <h1>Recipes not found.</h1> 
        )}
    </div>
  )
}

export default Searched