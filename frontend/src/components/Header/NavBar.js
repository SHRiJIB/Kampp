import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, Menu } from "./styles";
import { MenuItems } from "../../data/MenuItem";
import { Button } from "../Button/Button";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavLink brand="true" to="/">
        Kamp
      </NavLink>
      <Bars onClick={() => setIsOpen((prev) => !prev)} />
      <Menu isOpen={isOpen}>
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
      </Menu>
    </Nav>
  );
};

export default NavBar;
