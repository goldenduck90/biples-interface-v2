import { styled } from '@mui/material/styles';
import { IconButton, Button } from '@mui/material';

export const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  backgroundColor: theme.palette.primary.main,
  transition: theme.transitions.create('opacity', {
    duration: theme.transitions.duration.shorter,
  }),
}));

export const StyledActionGroup = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));

export const StyledAction = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const StyledProfileImage = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 30px',
}));

export const StyledRootBox = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '15px',
  padding: '0px 16px',
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
