import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default styled(Typography)(({ theme, ownerState }) => {
  return {
    color: 'red',
    fontSize: 11
  };
});