import React from "react";
import {
  Heading,
  StatContainer,
  Wrapper,
  Description,
  Icon,
  StatBox,
  Title,
} from "./styles";
import { GiEarthAmerica } from "react-icons/gi";
import { MdAirplanemodeActive, MdTimer } from "react-icons/md";
import { FaMoneyCheck } from "react-icons/fa";

const statData = [
  {
    icon: <GiEarthAmerica style={{ color: "#047bf1" }} />,
    title: "Over 200 Campgrounds",
    desc: "Travel to 200 unique places.",
  },
  {
    icon: <MdAirplanemodeActive style={{ color: "#f3a82e" }} />,
    title: "100k trips made",
    desc: "Over 100k trips made last year.",
  },
  {
    icon: <MdTimer style={{ color: "#f34f2e" }} />,
    title: "Fastest support",
    desc: "Access our support team 24/7.",
  },
  {
    icon: <FaMoneyCheck style={{ color: "#3af576" }} />,
    title: "Best deals",
    desc: "We offer the best prices.",
  },
];

const Stats = () => {
  return (
    <StatContainer>
      <Heading>Why choose us?</Heading>
      <Wrapper>
        {statData.map((item, index) => (
          <StatBox key={index}>
            <Icon>{item.icon}</Icon>
            <Title>{item.title}</Title>
            <Description>{item.desc}</Description>
          </StatBox>
        ))}
      </Wrapper>
    </StatContainer>
  );
};

export default Stats;
