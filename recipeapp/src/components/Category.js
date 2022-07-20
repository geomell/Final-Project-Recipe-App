import styled from "styled-components";
import { NavLink } from "react-router-dom";
import './Category.css'

function Category() {
  return (
    <div>

    <h2>Recipes from around the world:</h2>
    <div className='list'>
      <SLink className='shadow' to="/cuisine/African">
        <h4>African</h4>
      </SLink>
      <SLink className='shadow' to="/cuisine/American">
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
  margin-right: 1rem;
  text-decoration: none;
  background: #eacda3;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #d6ae7b, #eacda3);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #d6ae7b, #eacda3); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  width: 6rem;
  height: 4rem;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: black;
    font-size: 1rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: #ec008c;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #fc6767, #ec008c);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #fc6767, #ec008c); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    svg {
      color: white;
    }
    h4 {
      color: white;
    }
  }
  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 4rem;
    height: 4rem;
    h4 {
      font-size: 0.5rem;
    }
  }
`;
export default Category