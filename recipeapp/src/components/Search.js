import React from 'react';
import "./Search.css"
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

function Search() {

    const [input, SetInput] =useState("");
    const navigate= useNavigate ();

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate('/searched/'+input);
    };

  return (
    <form onSubmit={submitHandler}>
        <div>
            <FaSearch> </FaSearch>
        <input onChange={(e)=>SetInput(e.target.value)}
        type="text" placeholder='Search for an ingredient...' value={input}/>
        </div>
        
    </form>
    
  )
}

export default Search