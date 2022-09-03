import styled from "styled-components"

export const StyledNavBar = styled.div`   //caja contenedora
    display: flex;
    margin-top: 40px;
    @media (max-width: 900px){
        justify-content: space-between;
    }
`
// export const NavItems = styled.div`            //era el estilo de los links que luego los pase al comp Links.js
//     display: flex;
//     background-color: lightblue;                     
//     justify-content: space-evenly;
//     padding: 1rem 1rem;
//     width: 80rem;
//     height: 2rem;
//     margin-top: 1rem;
// `

export const DivImg = styled.div`         // caja de logo
    width: 130px;
    height: 100px;
    align-self: flex-start;
    margin: 0 20px 0 20px; 
    @media (max-width: 900px){
        align-self: center;
        width: 100px;
        margin-left: 2rem;
    }
`
export const StyledLogo = styled.img`    //logo
    object-fit: cover;
    height: 100%;
`

