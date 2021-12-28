import { Box, styled, TextField } from "@mui/material";

export const Container = styled(Box)`
  padding: 5rem;
  min-height: calc(100vh - 340px - 80px);
  margin-bottom: 25px;
`;
export const Form = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const TextInput = styled(TextField)`
  width: 350px;
  margin-bottom: 15px;
`;
