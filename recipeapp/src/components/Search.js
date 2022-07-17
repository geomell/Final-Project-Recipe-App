import React from 'react';
import "./Search.css"
import styled from 'styled-components';
import {useState} from 'react';
import {TiDeleteOutline} from 'react-icons/ti';
import {FaSearch} from 'react-icons/fa'

function Search() {

    const [input, SetInput] =useState("");

    const submitHandler = (e) =>{
        e.preventDefault();
    };

  return (
    <form onSubmit={submitHandler}>
        <div>
            <FaSearch> </FaSearch>
        <input onChange={(e)=>SetInput(e.target.value)}
        type="text" value={input}/>
        </div>
        
    </form>
    
  )
}

export default Search