import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '15px',
  height: 45,
  width: '100%',
  fontSize: '20px',
  padding: '15px',
}));
