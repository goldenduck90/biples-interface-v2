import { styled } from '@mui/material/styles';

export const StyledRoot = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '15px',
  padding: '0px 16px',
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
