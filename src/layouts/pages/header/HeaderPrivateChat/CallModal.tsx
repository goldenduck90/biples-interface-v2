import { FC } from 'react';
import { styled } from '@mui/material/styles';
import {
  Stack,
  DialogContent,
  DialogTitle,
  Dialog,
  Divider,
  Typography,
  IconButton,
} from '@mui/material';
// auth
import { useAuthContext } from '../../../../auth/useAuthContext';
import Image from '../../../../components/image';
import SvgColor from '../../../../components/svg-color';
import Iconify from '../../../../components/iconify';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogTitle-root': {
    padding: theme.spacing(3, 4),
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3, 4),
  },
}));

interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: any;
}

function StyledDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle {...other}>
      <Stack direction="row" alignItems="center" justifyContent="flex-end">
        {children}
        {onClose ? (
          <IconButton aria-label="close" onClick={onClose} sx={{ color: 'primary.contrastText' }}>
            <Iconify icon="eva:close-fill" />
          </IconButton>
        ) : null}
      </Stack>
      <Divider sx={{ color: 'primary.main', mt: 3 }} />
    </DialogTitle>
  );
}

interface CallModalProps {
  open: boolean;
  handleClose: () => void;
}
const CallModal: FC<CallModalProps> = ({ open, handleClose }) => {
  const { user } = useAuthContext();

  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="call-dialog-title"
      open={open}
      maxWidth="xl"
      PaperProps={{
        style: {
          background: 'rgba(21, 21, 21, 0.85)',
          backdropFilter: 'blur(7.5px)',
        },
      }}
    >
      <StyledDialogTitle id="call-dialog-title" onClose={handleClose} />
      <DialogContent sx={{ width: 700 }}>
        <Stack alignItems="center" justifyContent="center">
          <Image
            disabledEffect
            src="/assets/images/4.png"
            alt={user?.displayName}
            sx={{ width: 200, height: 200 }}
            style={{
              padding: '5px',
              borderRadius: '50%',
              background: 'linear-gradient(to right, #6AF6FF, #E140E4)',
            }}
          />

          <Typography
            variant="subtitle2"
            pt={4}
            sx={{
              backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {user?.displayName}
          </Typography>
          <Typography variant="body1" pt={1} sx={{ color: '#565A7F' }}>
            is calling you...
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" justifyContent="center" mt={12} spacing={3}>
          <IconButton
            sx={{
              height: 50,
              width: 50,
              bgcolor: 'secondary.main',
            }}
          >
            <SvgColor
              src="/assets/images/svgs/mic.svg"
              sx={{ width: 30, height: 30, color: 'primary.contrastText' }}
            />
          </IconButton>
          <IconButton
            sx={{
              height: 50,
              width: 50,
              bgcolor: '#E82B2B',
              backDropFilter: '12px',
              '&:hover': {
                bgcolor: '#E82B2B',
              },
            }}
          >
            <SvgColor
              src="/assets/images/svgs/call_end.svg"
              sx={{ width: 30, height: 30, color: 'primary.contrastText' }}
            />
          </IconButton>
          <IconButton
            sx={{
              height: 50,
              width: 50,
              bgcolor: '#4DE265',
              backDropFilter: '12px',
              '&:hover': {
                bgcolor: '#4DE265',
              },
            }}
          >
            <SvgColor
              src="/assets/images/svgs/call_start.svg"
              sx={{ width: 30, height: 30, color: 'primary.contrastText' }}
            />
          </IconButton>
          <IconButton
            sx={{
              height: 50,
              width: 50,
              bgcolor: 'secondary.main',
            }}
          >
            <SvgColor
              src="/assets/images/svgs/videocam_off.svg"
              sx={{ width: 30, height: 30, color: 'primary.contrastText' }}
            />
          </IconButton>
        </Stack>
      </DialogContent>
    </StyledDialog>
  );
};

export default CallModal;
