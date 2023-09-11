import { styled } from '@mui/material/styles';
import { OutlinedInput, Dialog } from '@mui/material';

export const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '10px',
  fontSize: '16px',
  color: '#565A7F',
}));

export const StyledItem = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin: theme.spacing(3, 8),
}));
