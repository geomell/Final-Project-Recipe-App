import Pages from "./pages/Pages";
import './App.css';
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom"
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {GiKnifeFork, GiSpoon} from 'react-icons/gi'
import {useRef} from 'react';
import Footer from "./components/Footer";



function App() {

  const ref = useRef(null);
  const handleClick = () => {
    //  clear input field value
    ref.current.value = '';
  };

  return (
    <div className="App" >
      <BrowserRouter>
        <Nav>
          <GiSpoon />
          <Logo to={'/'}  onClick={handleClick}> 
          Tasty </Logo>
          <GiKnifeFork />
          <Search className='left'/>
        </Nav>
        <Category />
        <Pages />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.9rem;
  color: pink;
  font-weight: 600;
  padding: 0rem 0.5rem;

  @media (max-width :830px) {
    font-size:1.2rem;
  }

  @media (max-width :510px) {
    font-size:0.8rem;
  }
`;

const Nav = styled.div`
  padding-left: 1rem;
  background-color: rgb(174, 35, 174);
  height: 6rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    color: pink;
    font-size: 2rem;
  }

  @media (max-width :830px) {
    svg{
      font-size: 1.5rem;
    }

  @media (max-width :510px) {
      font-size:0.6rem;
    }
  }
`;

export default App;
