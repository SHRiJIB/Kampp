import { Box, styled, TextField } from "@mui/material";

export const Container = styled(Box)`
  padding: 5rem;
  min-height: calc(100vh - 340px - 80px);
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding: 2rem;
`;
export const TextInput = styled(TextField)`
  width: 400px;
  margin-bottom: 10px;
`;
