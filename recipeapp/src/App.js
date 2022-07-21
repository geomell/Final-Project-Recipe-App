import Pages from "./pages/Pages";
import './App.css'
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom"
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {GiKnifeFork} from 'react-icons/gi'



function App() {
  return (
       <div className="App" >
      <BrowserRouter>
      <Nav>
        <GiKnifeFork />
        <Logo to={'/'}> Recipe App </Logo>
        <GiKnifeFork />
        <Search className='left'/>
      </Nav>
      <Category />
      <Pages />
      </BrowserRouter>
    </div>
    
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.7rem;
  color: pink;
  font-weight: 600;
  font-family: "Consolas", sans-serif;
  padding: 0rem 0.5rem;
  @media (max-width :830px) {
    font-size:1.2rem;
  }
`;

const Nav = styled.div`
  
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
    
  }

`;

export default App;
