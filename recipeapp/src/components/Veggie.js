import { useEffect, useState } from "react";
import "../components/css/Veggie.css"
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import {Link} from 'react-router-dom';

function Veggie() {

  const [vegetarian, setVegetarian] = useState ([]);

  useEffect (()=> {
    getVegetarian();
  },[]);

  const getVegetarian= async () => {

    const check = localStorage.getItem('vegetarian');

    if (check) {
      setVegetarian(JSON.parse(check));
    }else {
      const api= await fetch (
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API}&number=9&tags=vegetarian`);
      const data= await api.json();

      localStorage.setItem('vegetarian', JSON.stringify(data.recipes))
      setVegetarian (data.recipes);
    }
  };

  return (
    <div>      
        <div className="wrapper">
            <h3>Vegetarian Recipes</h3>
            <Splide options={{
              perPage: 3, 
              arrows: false,
              pagination: false,
              drag: 'free',
              gap: '2rem',
            }}>
            {vegetarian.map((recipe)=> {
              return (
                <SplideSlide key={recipe.id}>
                <div class="Card">
                <Link to={'/recipe/'+recipe.id}>
                  <p> {recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <Gradient />
                  </Link>
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

export default Veggie