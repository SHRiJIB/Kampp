import React from "react";
import {
  FooterContainer,
  FooterDesc,
  FooterLink,
  FooterLinkItems,
  FooterLinksWrapper,
  FooterLinkTitle,
} from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Kamp</h1>
          <p>We strive to create the best experiences for our customers</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact Us</FooterLinkTitle>
          <FooterLink to="/">About</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destinations</FooterLink>
          <FooterLink to="/">Shonshorships</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Campgrounds</FooterLinkTitle>
          <FooterLink to="/">Explore</FooterLink>
          <FooterLink to="/">Gallery</FooterLink>
          <FooterLink to="/">Review</FooterLink>
          <FooterLink to="/">Owner</FooterLink>
        </FooterLinkItems>

        <FooterLinkItems>
          <FooterLinkTitle>Social Media</FooterLinkTitle>
          <FooterLink to="/">Instagram</FooterLink>
          <FooterLink to="/">Facebook</FooterLink>
          <FooterLink to="/">Youtube</FooterLink>
          <FooterLink to="/">Twitter</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  );
};

export default Footer;
