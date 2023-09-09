import { useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Typography, IconButton, Divider, Stack } from '@mui/material';
// auth
import { useAuthContext } from '../../../../auth/useAuthContext';
// routes
import { PATH_AUTH } from '../../../../routes/paths';
// components
import { useSnackbar } from '../../../../components/snackbar';
import Image from '../../../../components/image';
import SvgColor from '../../../../components/svg-color';
import ProfileModal from './ProfileModal';
import { StyledRoot } from './styles';

// ----------------------------------------------------------------------

export default function NavAccount() {
  const { replace } = useRouter();

  const { user, logout } = useAuthContext();

  const { enqueueSnackbar } = useSnackbar();

  const [openProfile, setProfileOpen] = useState(false);

  const handleProfileOpen = () => {
    setProfileOpen(true);
  };
  const handleProfileClose = () => {
    setProfileOpen(false);
  };

  const handleLogout = async () => {
    try {
      logout();
      replace(PATH_AUTH.login);
    } catch (error) {
      console.error(error);
      enqueueSnackbar('Unable to logout!', { variant: 'error' });
    }
  };

  return (
    <StyledRoot sx={{ pt: 1, pb: 3 }}>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row">
          <IconButton onClick={handleProfileOpen}>
            <SvgColor
              src="/assets/images/svgs/settings.svg"
              sx={{
                width: 16,
                height: 16,
                color: 'primary.contrastText',
              }}
            />
          </IconButton>
          <IconButton>
            <SvgColor
              src="/assets/images/svgs/user-account.svg"
              sx={{
                width: 16,
                height: 16,
                color: 'primary.contrastText',
              }}
            />
          </IconButton>
          <IconButton onClick={handleLogout}>
            <SvgColor
              src="/assets/images/svgs/out.svg"
              sx={{
                width: 16,
                height: 16,
                color: 'primary.contrastText',
              }}
            />
          </IconButton>
        </Stack>
        <Stack direction="row">
          <IconButton>
            <SvgColor
              src="/assets/images/svgs/bell.svg"
              sx={{
                width: 16,
                height: 16,
                color: 'primary.contrastText',
              }}
            />
          </IconButton>
          <IconButton>
            <SvgColor
              src="/assets/images/svgs/mail.svg"
              sx={{
                width: 16,
                height: 16,
                color: 'primary.contrastText',
              }}
            />
          </IconButton>
        </Stack>
      </Stack>
      <Divider sx={{ color: 'primary.main' }} />
      <Stack alignItems="center" spacing={1} mt={4}>
        <Image
          disabledEffect
          src="/assets/images/profile.png"
          alt={user?.displayName}
          sx={{ width: 160, height: 160 }}
          style={{
            padding: '3.6px',
            borderRadius: '50%',
            background: 'linear-gradient(to right, #6AF6FF, #E140E4)',
          }}
        />
        <Typography
          variant="h6"
          sx={{
            backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {user?.displayName}
        </Typography>
      </Stack>
      <ProfileModal open={openProfile} handleClose={handleProfileClose} />
    </StyledRoot>
  );
}
