import { FC } from 'react';
import { styled } from '@mui/material/styles';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import CollectibleItem from './CollectibleItem';
import Iconify from '../../../../../components/iconify';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogTitle-root': {
    padding: theme.spacing(6, 0, 0, 0),
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(6, 12),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: any;
}

interface CollectiblesModalProps {
  open: boolean;
  handleClose: () => void;
}
const CollectiblesModal: FC<CollectiblesModalProps> = ({ open, handleClose }) => (
  <StyledDialog
    onClose={handleClose}
    aria-labelledby="my-collectibles-dialog-title"
    open={open}
    maxWidth="xl"
    PaperProps={{
      style: {
        background: 'rgba(21, 21, 21, 0.85)',
        backdropFilter: 'blur(19px)',
      },
    }}
  >
    <DialogTitle typography="h4" sx={{ textAlign: 'center' }} id="my-collectibles-dialog-title">
      My Collectibles
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
      <Grid container spacing={3} sx={{ maxWidth: 900 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid key={index} md={4}>
            <CollectibleItem />
          </Grid>
        ))}
      </Grid>
    </DialogContent>
  </StyledDialog>
);

export default CollectiblesModal;
