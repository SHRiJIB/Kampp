import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";

import { useState } from "react";
import { Container, Form, TextInput } from "./styles";

const EditCampground = () => {
  const [campData, setCampData] = useState({
    name: "",
    location: "",
    price: 0,
    images: [],
    description: "",
  });

  const handleChange = (event) => {
    setCampData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  return (
    <Container>
      <Paper>
        <Typography
          textAlign="center"
          marginBottom="15px"
          variant="h4"
          paddingTop="10px"
        >
          Edit Campground
        </Typography>
        <Form>
          <TextInput
            variant="outlined"
            placeholder="Campground"
            name="name"
            value={campData.name}
            onChange={handleChange}
            type="text"
          />
          <TextInput
            variant="outlined"
            placeholder="Location"
            name="location"
            value={campData.location}
            onChange={handleChange}
            type="text"
          />
          <TextInput
            variant="outlined"
            name="images"
            value={campData.images}
            onChange={handleChange}
            type="file"
          />

          <TextInput
            variant="outlined"
            placeholder="Price"
            name="price"
            value={campData.price}
            onChange={handleChange}
            type="number"
          />

          <TextInput
            variant="outlined"
            placeholder="Description"
            name="description"
            value={campData.description}
            onChange={handleChange}
            type="text"
          />
          <Box sx={{ width: 400 }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              fullWidth
            >
              Submit
            </Button>
          </Box>
        </Form>
      </Paper>
    </Container>
  );
};

export default EditCampground;
