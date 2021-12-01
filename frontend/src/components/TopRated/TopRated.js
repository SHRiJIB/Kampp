import React from "react";
import { useSpring } from "react-spring";
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
  const ColumnAnimation = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 200 },
  });

  const ReviewAnimation = useSpring({
    to: { opacity: 1, x: 0 },
    from: { opacity: 0, x: -200 },
  });

  return (
    <TopratedContainer>
      <Heading>Our Top Rated Campgrounds.</Heading>
      <Container>
        <ColumnOne>
          <Review style={ReviewAnimation}>
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
          <Review style={ReviewAnimation}>
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
        <ColumnTwo style={ColumnAnimation}>
          <Img src="./assets/images/camp-1.jpg" />
          <Img src="./assets/images/camp-2.jpg" />
        </ColumnTwo>
      </Container>
    </TopratedContainer>
  );
};

export default TopRated;
