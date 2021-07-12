import styled from "styled-components";

export const TopratedContainer = styled.div`
  width: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
`;
export const Heading = styled.div`
  color: #077bf1;
  font-size: 2rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`;
export const Review = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-style: italic;
  }

  p {
    color: #3b3b3b;
  }
`;

export const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 2rem;
  justify-content: center;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const Img = styled.img`
  border-radius: 10px;
  height: 500px;
  width: 100%;
  max-width: 18rem;
`;
