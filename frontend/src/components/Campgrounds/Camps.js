import React from "react";
import {
  CampgroundContainer,
  Heading,
  Wrapper,
  CampCard,
  CampInfo,
  TextWrap,
  CampTitle,
  CampImg,
} from "./styles";
import { CAMPS } from "../../data/Campgrounds";
import { Button } from "../Button/Button";
import { ImLocation } from "react-icons/im";
const Camps = () => {
  return (
    <>
      <CampgroundContainer>
        <Heading>Heading</Heading>
        <Wrapper>
          {CAMPS.map((camp, index) => (
            <CampCard key={index}>
              <CampImg src={camp.img} alt={camp.alt} />
              <CampInfo>
                <TextWrap>
                  <ImLocation />
                  <CampTitle>{camp.name}</CampTitle>
                </TextWrap>
                <Button
                  to="/camps"
                  primary="true"
                  round="true"
                  style={{
                    position: "absolute",
                    top: "420px",
                    fontSize: "14px",
                  }}
                >
                  {camp.button}
                </Button>
              </CampInfo>
            </CampCard>
          ))}
        </Wrapper>
      </CampgroundContainer>
    </>
  );
};

export default Camps;
