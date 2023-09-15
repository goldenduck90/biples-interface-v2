import { FC, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  IconButton,
  Stack,
  DialogContent,
  DialogTitle,
  Dialog,
  Divider,
  Typography,
  Unstable_Grid2 as Grid,
} from '@mui/material';
import Image from '../../../../components/image';
import Iconify from '../../../../components/iconify';
import RightContextMenu from './RightContextMenu';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogTitle-root': {
    padding: theme.spacing(3, 4),
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(0, 4, 3, 4),
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
      <Stack direction="row" alignItems="center" justifyContent="space-between">
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

interface GalleryModalProps {
  open: boolean;
  handleClose: () => void;
}
const GalleryModal: FC<GalleryModalProps> = ({ open, handleClose }) => {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };

  const handleCloseMenu = () => {
    setContextMenu(null);
  };

  return (
    <StyledDialog
      onClose={handleClose}
      aria-labelledby="gallery-dialog-title"
      open={open}
      maxWidth="xl"
      PaperProps={{
        style: {
          background: 'rgba(21, 21, 21, 0.85)',
          backdropFilter: 'blur(7.5px)',
        },
      }}
    >
      <StyledDialogTitle id="gallery-dialog-title" onClose={handleClose}>
        <Typography variant="subtitle1">Gallery</Typography>
      </StyledDialogTitle>
      <DialogContent sx={{ width: 600 }}>
        <Stack spacing={2}>
          <Typography variant="body1" fontWeight={600}>
            December
          </Typography>
          <Grid container spacing={1} columns={10}>
            {Array.from(Array(10)).map((_, index) => (
              <Grid
                key={index}
                xs={2}
                onContextMenu={handleContextMenu}
                sx={{ cursor: 'context-menu' }}
              >
                <Image
                  disabledEffect
                  src="/assets/images/1.png"
                  alt=""
                  sx={{ width: 100, height: 'auto', borderRadius: '10px' }}
                />
              </Grid>
            ))}
          </Grid>
          <Typography variant="body1" fontWeight={600}>
            November
          </Typography>
          <Grid container spacing={1} columns={10}>
            {Array.from(Array(10)).map((_, index) => (
              <Grid
                key={index}
                xs={2}
                onContextMenu={handleContextMenu}
                sx={{ cursor: 'context-menu' }}
              >
                <Image
                  disabledEffect
                  src="/assets/images/1.png"
                  alt=""
                  sx={{ width: 100, height: 'auto', borderRadius: '10px' }}
                />
              </Grid>
            ))}
          </Grid>
          <Typography variant="body1" fontWeight={600}>
            October
          </Typography>
          <Grid container spacing={1} columns={10}>
            {Array.from(Array(10)).map((_, index) => (
              <Grid
                key={index}
                xs={2}
                onContextMenu={handleContextMenu}
                sx={{ cursor: 'context-menu' }}
              >
                <Image
                  disabledEffect
                  src="/assets/images/1.png"
                  alt=""
                  sx={{ width: 100, height: 'auto', borderRadius: '10px' }}
                />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </DialogContent>

      <RightContextMenu contextMenu={contextMenu} handleCloseMenu={handleCloseMenu} />
    </StyledDialog>
  );
};

export default GalleryModal;
