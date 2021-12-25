import React from "react";
import { Box, Button, Typography } from "@mui/material";

import { useState } from "react";
import { Container, Form, TextInput } from "./styles";

const Login = () => {
  const [loginInfo, setLogInfo] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setLogInfo((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <Container>
      <Typography textAlign="center" marginBottom="15px" variant="h4">
        Login
      </Typography>
      <Form>
        <TextInput
          variant="outlined"
          placeholder="Email"
          name="email"
          value={loginInfo.email}
          onChange={handleChange}
          type="email"
        />
        <TextInput
          variant="outlined"
          placeholder="Password"
          name="password"
          value={loginInfo.password}
          onChange={handleChange}
          type="password"
        />
        <Box sx={{ width: 350 }}>
          <Button variant="contained" color="primary" size="large" fullWidth>
            Login
          </Button>
        </Box>
      </Form>
    </Container>
  );
};

export default Login;
