import React from 'react';
import "./Recipe.css"
import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {useParams} from 'react-router-dom';

function Recipe() {

  let params = useParams ();
  const [details, setDetails]= useState ({});
  const [activeTab, setActiveTab]= useState ('instructions');

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API}`)
    const detailData = await data.json();
    setDetails (detailData);
    console.log(detailData);
  };

  useEffect(()=> {
    fetchDetails();
  }, [params.name]);

  return (
    <div className='wrapperRecipe'>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt='' />
      </div>
      <div className='information'>
        <button className={activeTab === 'instructions' ? 'active' : ''} onClick={()=>setActiveTab('instructions')}>
          Instructions
        </button>
        <button className={activeTab === 'ingredients' ? 'active' : ''} onClick={()=>setActiveTab('ingredients')}>
          Ingredients
        </button>
        {activeTab ==='instructions' && (
          <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
          <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
        </div>
        )}
        {activeTab === 'ingredients' && (
          <ul>
          {details.extendedIngredients.map ((ingredient)=> 
          <li key={ingredient.id}>{ingredient.original}</li>)}
        </ul>
        )}
        
      </div>
    </div>
  )
}

export default Recipe