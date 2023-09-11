import { styled } from '@mui/material/styles';

export const StyledRoot = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 3),
  borderRadius: Number(theme.shape.borderRadius) * 2,
  backgroundColor: theme.palette.primary.main,
}));

export const StyledActionGroupBox = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
}));
