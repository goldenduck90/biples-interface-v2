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
  Popover,
} from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
import Image from '../../components/image';
import SvgColor from '../../components/svg-color';
import Iconify from '../../components/iconify';

interface UserInfoProps {
  open?: HTMLButtonElement | null;
  handleClose: () => void;
}
const UserInfo: FC<UserInfoProps> = ({ open, handleClose }) => {
  const { user } = useAuthContext();

  return (
    <Popover
      open={Boolean(open)}
      anchorEl={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Stack sx={{ py: 2, px: 3, maxWidth: 287, position: 'relative' }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ color: 'primary.contrastText', position: 'absolute', right: 13, top: 13 }}
        >
          <Iconify icon="eva:close-fill" />
        </IconButton>
        <Typography variant="subtitle1" gutterBottom>
          Etiam feugiat lorem non metus
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis.
        </Typography>
      </Stack>
    </Popover>
  );
};

export default UserInfo;
