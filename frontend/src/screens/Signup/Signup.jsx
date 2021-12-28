import React from "react";
import { Box, Button, Typography, Link as MUILink } from "@mui/material";

import { useState } from "react";
import { Container, Form, TextInput } from "./styles";
import { Link } from "react-router-dom";
const Signup = () => {
  const [signUpInfo, setSignUpInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setSignUpInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <Container>
      <Typography textAlign="center" marginBottom="15px" variant="h4">
        Sign Up
      </Typography>
      <Form>
        <TextInput
          variant="outlined"
          placeholder="First Name"
          name="firstName"
          value={signUpInfo.firstName}
          onChange={handleChange}
          type="text"
        />
        <TextInput
          variant="outlined"
          placeholder="Last Name"
          name="lastName"
          value={signUpInfo.lastName}
          onChange={handleChange}
          type="text"
        />
        <TextInput
          variant="outlined"
          placeholder="Email"
          name="email"
          value={signUpInfo.email}
          onChange={handleChange}
          type="email"
        />
        <TextInput
          variant="outlined"
          placeholder="Password"
          name="password"
          value={signUpInfo.password}
          onChange={handleChange}
          type="password"
        />
        <Box sx={{ width: 350 }}>
          <Button variant="contained" color="primary" size="large" fullWidth>
            Signup
          </Button>
          <MUILink component={Link} to="/login">
            Already hava an account?
          </MUILink>
        </Box>
      </Form>
    </Container>
  );
};

export default Signup;
