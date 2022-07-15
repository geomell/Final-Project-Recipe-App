import styled from "styled-components";
import "./Category.css"
import {NavLink} from 'react-router-dom';
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi';



function Category() {
  return (
    <div className="list">
        <NavLink>
            <FaPizzaSlice />
            <h4>Italian</h4>
        </NavLink>
        <NavLink >
            <FaHamburger />
            <h4>American</h4>
        </NavLink>
        <NavLink >
            <GiNoodles />
            <h4>Thai</h4>
        </NavLink>
        <NavLink >
            <GiChopsticks />
            <h4>Japanese</h4>
        </NavLink>
    </div>
  )
}

export default Category