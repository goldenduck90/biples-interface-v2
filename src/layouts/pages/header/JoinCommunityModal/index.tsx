import { FC } from 'react';
import { styled } from '@mui/material/styles';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Box,
  InputAdornment,
  OutlinedInput,
} from '@mui/material';
import CommunityItem from './CommunityItem';
import SvgColor from '../../../../components/svg-color';
import Iconify from '../../../../components/iconify';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: any;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Iconify icon="eva:close-fill" />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  textAlign: 'center',
  borderRadius: '10px',
}));

const StyledBox = styled(Box)(({ theme }) => ({
  borderRadius: '10px',
  margin: '10px 0px',
  padding: '0px',
}));

const StyledJoinButton = styled(Button)(({ theme }) => ({
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)'
      : theme.palette.primary.main,
  height: 58,
  minWidth: 260,
  marginTop: '20px',
}));

interface JoinCommunityModalProps {
  open: boolean;
  handleClose: () => void;
}
const JoinCommunityModal: FC<JoinCommunityModalProps> = ({ open, handleClose }) => (
  <div>
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="join-community-dialog-title"
      open={open}
      maxWidth="xl"
      PaperProps={{
        style: {
          backgroundImage: 'linear-gradient(rgba(21,21,21,0.85), rgba(21,21,21,0.85))',
          backgroundColor: 'rgba(0,0,0,0)',
          backdropFilter: 'blur(7.5px)',
        },
      }}
    >
      <BootstrapDialogTitle id="join-community-dialog-title" onClose={false}>
        <h1 style={{ textAlign: 'center' }}>Join a Community</h1>
      </BootstrapDialogTitle>
      <DialogContent dividers style={{ width: '700px', padding: '40px 50px', textAlign: 'center' }}>
        <StyledOutlinedInput
          defaultValue=""
          fullWidth
          placeholder="Explorer"
          endAdornment={
            <InputAdornment position="end">
              <SvgColor src="/assets/images/svgs/search.svg" sx={{ width: 12, height: 12 }} />
            </InputAdornment>
          }
        />
        <StyledBox sx={{ display: 'flex', flexDirection: 'column' }}>
          {Array.from(Array(6)).map((_, index) => (
            <CommunityItem key={index} />
          ))}
        </StyledBox>
        <StyledJoinButton variant="contained">Join</StyledJoinButton>
      </DialogContent>
    </BootstrapDialog>
  </div>
);

export default JoinCommunityModal;
