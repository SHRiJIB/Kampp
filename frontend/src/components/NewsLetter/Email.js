import React from "react";
import { Button } from "../Button/Button";
import { Container, Content, FormWrap } from "./styles";
const Email = () => {
  return (
    <Container>
      <Content>
        <h1>Get latest camping site information</h1>
        <form action="#">
          <FormWrap>
            <label htmlFor="email">
              <input type="email" id="email" placeholder="Enter your email" />
            </label>
          </FormWrap>
          <Button as="button" type="submit" primary="true" round="true">
            Sign Up
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export default Email;
