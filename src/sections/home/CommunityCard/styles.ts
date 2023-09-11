import { styled } from '@mui/material/styles';

export const StyledRoot = styled('div')(({ theme }) => ({
  borderRadius: '10px',
  position: 'relative',
}));

export const StyledInfo = styled('div')(({ theme }) => ({
  position: 'absolute',
  width: '100%',
  height: '72px',
  bottom: 0,
  zIndex: 1,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '10px',
  background: 'linear-gradient(90.6deg, rgba(21, 21, 21, 0.42) 0.3%, rgba(185, 35, 255, 0) 105.8%)',
  backdropFilter: 'blur(2.5px)',
  padding: '10px 20px',
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
