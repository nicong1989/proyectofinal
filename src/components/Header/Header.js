import React from 'react';
import styled from "styled-components";

export const listaLinksHeader = [
    [ 'Header 1', '#'], ['Newsletter', '#suscripcion']
];

export const LinksHeader = styled.div`
    background-color: lightblue;               //color temporal
    position: relative;
    display: flex  ;
    padding: .5rem 2rem;
    justify-content: flex-end;
    gap: 30px;

    a{
        text-decoration: none;
        color: #000;
        text-shadow: 4px 4px 6px #000000;
    };
    a:hover{
        color: white;
        cursor: pointer;
        transition:all .1s ease-in-out;
        transform:scale(1.2);
    }
    
`

const Header = () => {
    return (
        <LinksHeader>
            {listaLinksHeader.map((link, index) => (
                <a key={index} href={link[1]}>{link[0]}</a>))}
        </LinksHeader>
    );
}

export default Header;

