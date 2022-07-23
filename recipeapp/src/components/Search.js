import React from 'react';
import "../components/css/Search.css"
import {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {TiDeleteOutline} from 'react-icons/ti'
import {useNavigate} from 'react-router-dom';
import {useRef} from 'react';

function Search() {

    const [input, SetInput] =useState("");
    const navigate= useNavigate ();

    const submitHandler = (e) =>{
        e.preventDefault();
        navigate('/searched/'+input);
    };

    const ref = useRef(null);

    const handleClick = () => {
      // 👇️ clear input field value
      ref.current.value = '';
    };

  return (

    <form onSubmit={submitHandler}>
      <div>
        <FaSearch  color="white" className='styling_search'/> 
        <input ref={ref} onChange={(e)=>SetInput(e.target.value)}
        type="text"  placeholder='Enter an ingredient...' value={input}/>
        <TiDeleteOutline color='white' className='styling_del' onClick={handleClick}/>
      </div>
    </form>
  )
}

export default Search