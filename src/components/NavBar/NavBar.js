import React  from 'react';
import Links from './Links';
import { StyledNavBar, DivImg, StyledLogo} from './NavBar.styled';
import BotonCarrito from './BotonCarrito';
import Burger from './Burger';


const NavBar = () => {
    return (
        <StyledNavBar>
            <Burger />
            <DivImg>
<<<<<<< HEAD
                <StyledLogo src='https://i.imgur.com/tOlCZm0.png' alt='Logo'></StyledLogo>
=======
                <StyledLogo src='https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1' alt='Logo'></StyledLogo>
>>>>>>> c53e3d0d89f1981aa98a4e7b1978b89e4910f21c
            </DivImg>
            <Links />
            <BotonCarrito />
        </StyledNavBar>
    );
}

export default NavBar;