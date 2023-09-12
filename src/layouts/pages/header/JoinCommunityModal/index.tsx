import { FC } from 'react';
import { styled } from '@mui/material/styles';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Divider,
} from '@mui/material';
import CommunityItem from './CommunityItem';
import SvgColor from '../../../../components/svg-color';
import Iconify from '../../../../components/iconify';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogTitle-root': {
    padding: theme.spacing(6, 0, 0, 0),
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3, 12),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: any;
}

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: '16px',
  height: '70px',
}));

const StyledContent = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  width: '680px',
  borderRadius: '16px',
  margin: theme.spacing(4, 0),
  padding: theme.spacing(0, 4),
}));

interface JoinCommunityModalProps {
  open: boolean;
  handleClose: () => void;
}
const JoinCommunityModal: FC<JoinCommunityModalProps> = ({ open, handleClose }) => (
  <StyledDialog
    onClose={handleClose}
    aria-labelledby="join-community-dialog-title"
    open={open}
    maxWidth="xl"
    PaperProps={{
      style: {
        background: 'rgba(21, 21, 21, 0.85)',
        backdropFilter: 'blur(19px)',
      },
    }}
  >
    <DialogTitle typography="h4" sx={{ textAlign: 'center' }} id="join-community-dialog-title">
      Join a Community
      <Divider sx={{ color: 'primary.main', mt: 3 }} />
    </DialogTitle>
    <IconButton
      aria-label="close"
      onClick={handleClose}
      sx={{
        position: 'absolute',
        right: 8,
        top: 8,
        color: 'primary.contrastText',
      }}
    >
      <Iconify icon="eva:close-fill" />
    </IconButton>
    <DialogContent>
      <StyledOutlinedInput
        defaultValue=""
        fullWidth
        placeholder="Explorer"
        endAdornment={
          <InputAdornment position="end">
            <SvgColor src="/assets/images/svgs/search.svg" sx={{ width: 18, height: 18 }} />
          </InputAdornment>
        }
      />
      <StyledContent>
        {Array.from(Array(6)).map((_, index) => (
          <CommunityItem key={index} />
        ))}
      </StyledContent>
    </DialogContent>
  </StyledDialog>
);

export default JoinCommunityModal;
