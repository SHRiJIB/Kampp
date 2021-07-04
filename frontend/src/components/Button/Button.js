import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#F26A2E" : "#077BF1")};
  padding: ${({ lg }) => (lg ? "16px 40px" : "16px 32px")};
  white-space: nowrap;
  color: #fff;
  font-size: ${({ lg }) => (lg ? "20px" : "16px")};
  border: none;
  outline: none;
  text-decoration: none;
  min-width: 100px;
  cursor: pointer;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: ${({ primary }) => (primary ? "#077BF1" : "#F26A2E")};
    transform: translateY(-2px);
  }
`;
