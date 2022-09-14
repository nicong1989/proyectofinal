import React , {useState} from 'react';
import styled from 'styled-components';
import ModalBurger from './ModalBurger';



const StyledBurgerCont = styled.div`
    @media (min-width: 900px){
        display: none;
    };
    @media (max-width: 900px){
    display: flex;
    padding: 1rem 1rem;
    height: 2rem;
    width: 3rem; 
    margin-top: 2.3rem;
    margin-left: 1.5rem ;
    margin-right: 2rem;
    font-size: 30px;
    align-items: center;
    justify-content: center;
    }
`

const StyledBurger = styled.button`
    @media (min-width: 900px){
        display: none;
    };
    @media (max-width: 900px){
       margin-left: 1.5rem;
       background: #999999;
 background-image: -webkit-linear-gradient(top, #999999, #ffffff);
  background-image: -moz-linear-gradient(top, #999999, #ffffff);
  background-image: -ms-linear-gradient(top, #999999, #ffffff);
  background-image: -o-linear-gradient(top, #999999, #ffffff);
  background-image: linear-gradient(to bottom, #999999, #ffffff);
  -webkit-border-radius: 14;
  -moz-border-radius: 14;
  border-radius: 14px;
  color: #000;
  font-size: 20px;
  padding: 9px 20px 10px 25px;
  text-decoration: none;
  border: none;
  &:hover {
  background: #ffffff;
  background-image: -webkit-linear-gradient(top, #ffffff, #999999);
  background-image: -moz-linear-gradient(top, #ffffff, #999999);
  background-image: -ms-linear-gradient(top, #ffffff, #999999);
  background-image: -o-linear-gradient(top, #ffffff, #999999);
  background-image: linear-gradient(to bottom, #ffffff, #999999);
  text-decoration: none;
  cursor: pointer;
  };
}
`



const Burger = () => {
    const [estadoModalBurger , cambiarEstadoModalBurger] = useState(false)
    return (
        <>
            <StyledBurgerCont onClick={() => cambiarEstadoModalBurger(!estadoModalBurger)}>
                <StyledBurger >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                    </svg>
                </StyledBurger>

                <ModalBurger estado={estadoModalBurger} cambiarEstado={cambiarEstadoModalBurger}/>
            </StyledBurgerCont>
        </>
    );
}

export default Burger;
