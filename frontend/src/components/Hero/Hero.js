import React from "react";
import video from "../../assets/kamp-bg.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroItems,
} from "./styles";
import { Button } from "../Button/Button";
const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={video} type="video/mp4" autoPlay loop playsInline muted />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Unreal Destinations</HeroH1>
          <HeroP>Out of this world.</HeroP>
          <Button lg="true" to="/" round="true" primary="true">
            Explore now
          </Button>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
