import Pages from "./pages/Pages";
import './App.css';
import Category from "./components/Category";
import {BrowserRouter} from "react-router-dom"
import Search from "./components/Search";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {GiKnifeFork, GiSpoon} from 'react-icons/gi'
import Footer from "./components/Footer";
import {Helmet} from "react-helmet";

function App() {

  return (
    <div className="App" >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tasty</title>
        <meta name="description" content="A recipe app" />
      </Helmet>
      <BrowserRouter>
        <Nav>
          <GiSpoon />
          <Logo to={'/'}  > 
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
  font-size: 2.8rem;
  color: pink;
  font-weight: 600;
  padding: 0rem 0.5rem;

  @media (max-width :830px) {
    font-size:2.5rem;
  }

  @media (max-width :655px) {
    font-size:2.2rem;
  }

  @media (max-width :510px) {
    font-size:1.7rem;
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
      font-size: 4.5rem;
    }

  @media (max-width :655px) {
    svg{
      font-size: 3.5rem;
    }

  @media (max-width :510px) {
    padding-left: 0.5rem;
    svg{
      font-size:3rem;
    }
  }
`;

export default App;
