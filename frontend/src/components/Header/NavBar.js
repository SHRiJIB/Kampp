import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, Menu, Cross } from "./styles";
import { MenuItems } from "../../data/MenuItem";
import { Button } from "../Button/Button";
import { useLocation } from "react-router-dom";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <Nav isHome={location.pathname === "/"}>
      <NavLink brand="true" to="/">
        Kamp
      </NavLink>
      {isOpen ? (
        <Cross onClick={() => setIsOpen((prev) => !prev)} />
      ) : (
        <Bars onClick={() => setIsOpen((prev) => !prev)} />
      )}

      <Menu isOpen={isOpen}>
        <NavMenu>
          {MenuItems.map((item, index) => (
            <NavLink key={index} to={item.link}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
        {location.pathname === "/" && (
          <NavBtn>
            <Button primary="true" round="true" to="/login">
              Login
            </Button>
          </NavBtn>
        )}
      </Menu>
    </Nav>
  );
};

export default NavBar;
