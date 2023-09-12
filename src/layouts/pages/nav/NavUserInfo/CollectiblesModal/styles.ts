import { styled } from '@mui/material/styles';
import { Button, Box, IconButton } from '@mui/material';

export const StyledRootBox = styled(Box)(({ theme }) => ({
  borderRadius: '10px',
  marginRight: '16px',
  position: 'relative',
}));

export const StyledInfoBox = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 6,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
  background: 'linear-gradient(90.6deg, rgba(21, 21, 21, 0.42) 0.3%, rgba(185, 35, 255, 0) 105.8%)',
  backdropFilter: 'blur(2.5px)',
  padding: '10px 20px',
}));

export const StyledActionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
}));

export const StyledProfileImageBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 30px',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

export const StyledItem = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 0),
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

export const StyledDetailsButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  top: 12,
  right: 14,
  zIndex: 1,
  borderRadius: '15px',
  background: theme.palette.secondary.main,
  backdropFilter: 'blur(12.5px)',
  padding: '7px 21px',
  fontSize: '10px',
  fontWeight: 600,
  color: theme.palette.primary.contrastText,
}));

export const StyledRoot = styled('div')(({ theme }) => ({
  width: '270px',
  height: '270px',
  borderRadius: '15px',
  position: 'relative',
}));

export const StyledInfo = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '43px',
  bottom: 0,
  zIndex: 1,
  borderRadius: '15px',
  background: theme.palette.secondary.main,
  backdropFilter: 'blur(2.5px)',
  padding: '12px 18px',
}));

export const StyledDetails = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 12,
  right: 14,
  zIndex: 1,
  borderRadius: '15px',
  background: theme.palette.secondary.main,
  backdropFilter: 'blur(12.5px)',
  padding: '7px 21px',
  cursor: 'pointer',
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
