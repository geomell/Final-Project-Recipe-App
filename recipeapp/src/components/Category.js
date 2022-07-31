import styled from "styled-components";
import { NavLink } from "react-router-dom";
import '../components/css/Category.css'



function Category() {

    return (
    <div className="line">
      <h2>Recipes from around the world:</h2>
      <div className='list'>
        <SLink className='shadow hide'  to="/cuisine/African">
          <h4>African</h4>
        </SLink>
        <SLink className='shadow hide' to="/cuisine/American">
          <h4>American</h4>
        </SLink>
        <SLink className='shadow' to="/cuisine/French">
          <h4>French</h4>
        </SLink>
        <SLink className='shadow' to="/cuisine/Indian">
          <h4>Indian</h4>
        </SLink>
        <SLink className='shadow' to="/cuisine/Italian">
          <h4>Italian</h4>
        </SLink>
        <SLink className='shadow' to="/cuisine/Spanish">
          <h4>Spanish</h4>
        </SLink>
        <SLink className='shadow' to="/cuisine/Thai">
          <h4>Thai</h4>
        </SLink>
        <SLink className='shadow' to="/cuisine/Vietnamese">
          <h4>Japanese</h4>
        </SLink>
      </div>
     
    </div>
  );
}

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-right: 0.5rem;
  text-decoration: none;
  background-color: inherit;
  border: 2px solid black;
  width: 6rem;
  height: 4rem;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: purple;
    font-size: 1rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    color: #D92591
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }

  @media (max-width: 768px) {
    display:none
    margin-right: 0.1rem;
    height: 3rem;
    svg {
      font-size: 1.2rem;
    }
  }
`;

export default Category