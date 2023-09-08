import { useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Typography, IconButton, Divider } from '@mui/material';
// auth
import { useAuthContext } from '../../../auth/useAuthContext';
// routes
import { PATH_AUTH } from '../../../routes/paths';
// components
// import { CustomAvatar } from '../../../components/custom-avatar';
import { useSnackbar } from '../../../components/snackbar';
import Image from '../../../components/image';
import SvgColor from '../../../components/svg-color';
import ProfileModal from './ProfileModal';
import { StyledRoot, StyledActionGroup, StyledAction, StyledProfileImage } from './styles';

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
    // <Link component={NextLink} href={PATH_DASHBOARD.user.account} underline="none" color="inherit">
    <StyledRoot>
      <StyledActionGroup>
        <StyledAction>
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
          <ProfileModal open={openProfile} handleClose={handleProfileClose} />
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
        </StyledAction>
        <StyledAction>
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
        </StyledAction>
      </StyledActionGroup>
      <Divider
        sx={{
          color: 'rgba(104, 104, 104, 0.22)',
        }}
      />
      {/* <CustomAvatar src={user?.photoURL} alt={user?.displayName} name={user?.displayName} />

      <Box sx={{ ml: 2, minWidth: 0 }}>
        <Typography variant="subtitle2" noWrap>
          {user?.displayName}
        </Typography>

        <Typography variant="body2" noWrap sx={{ color: 'text.secondary' }}>
          {user?.role}
        </Typography>
      </Box> */}
      <StyledProfileImage>
        {/* <Image
          src="/assets/images/profile.png"
          alt="User Profile"
          width={160}
          height={160}
          style={{
            padding: '3.6px',
            borderRadius: '50%',
            background: 'linear-gradient(to right, #6AF6FF, #E140E4)',
          }}
        /> */}
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
          sx={{
            marginTop: '10px',
            backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontSize: '1.25rem',
          }}
        >
          {user?.displayName}
        </Typography>
      </StyledProfileImage>
    </StyledRoot>
    // </Link>
  );
}
