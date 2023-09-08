// @mui
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledRoot = styled('main')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  padding: theme.spacing(10, 2),
}));

export const StyledContent = styled('div')(({ theme }) => ({
  width: 350,
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  borderWidth: 1,
  borderStyle: 'solid',
  borderRadius: 12,
  borderColor: theme.palette.grey[700],
  background: 'linear-gradient(20.08deg, rgba(0, 0, 0, 0.48) 6.24%, rgba(10, 0, 0, 0.07) 103.48%)',
  backdropFilter: 'blur(62.5px)',
  padding: theme.spacing(6, 2),
  marginTop: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    width: 520,
    flexShrink: 0,
    padding: theme.spacing(8, 10),
  },
}));
