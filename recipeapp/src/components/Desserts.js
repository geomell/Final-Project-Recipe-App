import { useEffect, useState } from "react";
import "./Desserts.css"
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';

function Desserts() {

  const [dessert, setDessert] = useState ([]);

  useEffect (()=> {
    getDessert();
  },[]);

  const getDessert= async () => {

    const check = localStorage.getItem('dessert');

    if (check) {
      setDessert(JSON.parse(check));
    }else {
      const api= await fetch (
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=9&tags=dessert`);
      const data= await api.json();

      localStorage.setItem('dessert', JSON.stringify(data.recipes))
      setDessert (data.recipes);
    }
  };

  return (
    <div>      
        <div className="wrapper">
            <h3>Dessert Recipes</h3>
            <Splide options={{
              perPage: 3, 
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '2rem',
            }}>
            {dessert.map((recipe)=> {
              return (
                <SplideSlide key={recipe.id}>
                <div class="Card">
                  <p> {recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                </div>
                </SplideSlide>
              );
            })}
            </Splide>
          </div>
        
      
    </div>
  )
}

const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Desserts