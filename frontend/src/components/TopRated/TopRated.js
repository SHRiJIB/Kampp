import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import {
  TopratedContainer,
  ColumnOne,
  ColumnTwo,
  Container,
  Heading,
  Review,
  Img,
} from "./styles";

const TopRated = () => {
  return (
    <TopratedContainer>
      <Heading>Our Top Rated Campgrounds.</Heading>
      <Container>
        <ColumnOne>
          <Review>
            <IoMdCheckmarkCircleOutline
              style={{
                color: " #f9b19b",
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            />
            <h3>Shreejeeb Kesh</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate, laborum.
            </p>
          </Review>
          <Review>
            <FaRegLightbulb
              style={{
                color: " #3fffa8",
                fontSize: "2rem",
                marginBottom: "1rem",
              }}
            />
            <h3>Shreejeeb Kesh</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptate, laborum.
            </p>
          </Review>
        </ColumnOne>
        <ColumnTwo>
          <Img src="./assets/images/camp-1.jpg" />
          <Img src="./assets/images/camp-2.jpg" />
        </ColumnTwo>
      </Container>
    </TopratedContainer>
  );
};

export default TopRated;
