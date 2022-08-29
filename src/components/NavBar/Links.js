import React from "react";
import styled from 'styled-components'

export const listaLinks = [
    ['Menu 1', '#'], ['Menu 2', '#'], ['Menu 3', '#']
];


export const StyledLinks = styled.div`
    display: flex;
    background-color: lightblue;                      //color temporal
    justify-content: space-evenly;
    padding: 1rem 1rem;
    width: 80rem;
    height: 2rem;
    margin-top: 1rem;   
    border-radius: 25px;
    a{
        text-decoration: none;
        color: #000;
    };
    a:hover{
        color: white;
        cursor: pointer;
        transition:all .1s ease-in-out;
        transform:scale(1.2);
    };
`

const Links = () => {
    return (
        <StyledLinks>
            {listaLinks.map((link, index) => (
                <a key={index} href={link[1]}>{link[0]}</a>))}
        </StyledLinks>
    );
}

export default Links;
