import { FC, useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Stack,
  Divider,
} from '@mui/material';
import LinkItem from './LinkItem';
import Iconify from '../../../../../components/iconify';
import RightContextMenu from '../RightContextMenu';

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
    </DialogTitle>
  );
}

interface LinkModalProps {
  open: boolean;
  handleClose: () => void;
}
const LinkModal: FC<LinkModalProps> = ({ open, handleClose }) => {
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
      aria-labelledby="files-dialog-title"
      open={open}
      maxWidth="xl"
      PaperProps={{
        style: {
          background: 'rgba(21, 21, 21, 0.85)',
          backdropFilter: 'blur(7.5px)',
        },
      }}
    >
      <StyledDialogTitle id="files-dialog-title" onClose={handleClose}>
        <Typography variant="subtitle1">Files</Typography>
      </StyledDialogTitle>
      <DialogContent sx={{ width: 600 }}>
        <Stack spacing={2}>
          {Array.from(Array(5)).map((_, index) => (
            <Stack key={index}>
              <Divider sx={{ color: 'primary.contrastText', mb: 2 }} />
              <LinkItem handleContextMenu={handleContextMenu} />
            </Stack>
          ))}
        </Stack>
      </DialogContent>

      <RightContextMenu contextMenu={contextMenu} handleCloseMenu={handleCloseMenu} />
    </StyledDialog>
  );
};

export default LinkModal;
