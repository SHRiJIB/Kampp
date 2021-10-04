import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export const Nav = styled.div`
  background: transparent;
  max-width: 100vw;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  text-decoration: none;
  height: 100%;
  cursor: pointer;
  font-size: ${({ brand }) => (brand ? "24px" : "inherit")};
`;

export const Bars = styled(FaBars)`
  color: #fff;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    z-index: 1000;
  }
`;

export const Cross = styled(ImCross)`
  color: #fff;
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    z-index: 1000;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    a {
      color: white;
    }
    width: 100%;
    height: 40%;
    align-items: center;
    flex-direction: column;
  }
`;

export const NavBtn = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Menu = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    background: #000;
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 80vh;
    top: 0;
    align-items: center;
    justify-content: space-evenly;
  }
`;
