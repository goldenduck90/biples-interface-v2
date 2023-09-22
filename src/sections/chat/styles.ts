import { styled } from '@mui/material/styles';
import { IconButton, Button } from '@mui/material';

export const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.primary.main,
}));

export const StyledActionGroupBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: '30px',
  height: '30px',
  backgroundColor: theme.palette.primary.main,
  borderColor: theme.palette.mode === 'light' ? '#BBBBBB' : 'transparent',
  borderRadius: '7.5px',
  borderWidth: '0.5px',
  borderStyle: 'solid',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '15px',
  height: 45,
  width: '100%',
  justifyContent: 'start',
  fontSize: '1rem',
  paddingLeft: '25px',
}));
