import React from 'react';
import "./Search.css"
import styled from 'styled-components';
import {useState} from 'react';
import {TiDeleteOutline} from 'react-icons/ti';
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
            <FaSearch  color="white" className='styling'/> 
        <input onChange={(e)=>SetInput(e.target.value)}
        type="text" value={input}/>
        </div>
        
    </form>
    
  )
}

export default Search