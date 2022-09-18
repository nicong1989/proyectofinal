import React from "react";
import Links from "./Links";
import { StyledNavBar, DivImg, StyledLogo } from "./NavBar.styled";
import BotonCarrito from "./BotonCarrito";
import Burger from "./Burger";

const NavBar = () => {
  return (
    <StyledNavBar>
      <Burger />
      <DivImg>
        <StyledLogo
          src="https://i.imgur.com/tOlCZm0.png"
          alt="Logo"
        ></StyledLogo>
      </DivImg>
      <Links />
      <BotonCarrito />
    </StyledNavBar>
  );
};

export default NavBar;
