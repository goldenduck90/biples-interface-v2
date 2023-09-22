import { Dialog, OutlinedInput, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
// export const uploadButton = styled(Button)(({ theme }) => ({
//   background: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
//   height: 54,
//   width:  227,
//   marginLeft:10,
// }));

export const StyledProfileImage = styled('div')(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '20px 30px',
  borderRadius: '15px',
}));

export const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: '#151515',
  borderRadius: '10px',
}));

export const StyledPinInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  borderRadius: '10px',
  fontSize: '1rem',
  width: '3.5rem',
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
  height: 45,
  padding: 0,
  minWidth: 196,
}));

export const StyledDialogActionButton = styled(Button)(({ theme }) => ({
  height: 45,
  padding: 0,
  minWidth: 196,
}));
