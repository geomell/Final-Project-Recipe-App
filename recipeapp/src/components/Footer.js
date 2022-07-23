import React from 'react'
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import '../components/css/Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <Link  className='link' to={'/'}>  Tasty</Link>
            <p>Created by 
                <a 
                    target="_blank"
                    rel="noreferrer"
                    href='https://www.linkedin.com/in/georgia-melissari'>
                    Georgia Melissari </a>
            </p>
            <p>Thank you 
                <a
                    target="_blank"
                    rel="noreferrer"
                    href='https://socialhackersacademy.org/'>
                    SHA </a> 
                    <FaHeart />
            </p>
        </div>
  )
}

export default Footer