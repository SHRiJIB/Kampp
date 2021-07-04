import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn } from "./styles";
import { MenuItems } from "../../data/MenuItem";
import { Button } from "../Button/Button";
const NavBar = () => {
  return (
    <Nav>
      <NavLink brand="true" to="/">
        Kamp
      </NavLink>
      <Bars />
      <NavMenu>
        {MenuItems.map((item, index) => (
          <NavLink key={index} to={item.link}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" to="/login">
          Login
        </Button>
      </NavBtn>
    </Nav>
  );
};

export default NavBar;
