// @mui
import { Divider, IconButton, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Image from '../../components/image';

// ----------------------------------------------------------------------
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  width: 54,
  height: 54,
  backgroundColor: theme.palette.primary.main,
}));

export default function AuthWithSocial() {
  const { loginWithGoogle, loginWithTwitter } = useAuthContext();

  const handleGoogleLogin = async () => {
    try {
      if (loginWithGoogle) {
        loginWithGoogle();
      }
      console.log('GOOGLE LOGIN');
    } catch (error) {
      console.error(error);
    }
  };

  const handleTwitterLogin = async () => {
    try {
      if (loginWithTwitter) {
        loginWithTwitter();
      }
      console.log('TWITTER LOGIN');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Divider
        sx={{
          my: 3,
          typography: 'overline',
          '&::before, ::after': {
            borderTopStyle: 'solid',
          },
        }}
      >
        OR
      </Divider>

      <Stack direction="row" justifyContent="center" spacing={{ xs: 1.4, md: 2.7 }}>
        <StyledIconButton onClick={handleGoogleLogin}>
          <Image
            src="/assets/images/auth/metamask.svg"
            sx={{ width: 30, height: 30 }}
            style={{ cursor: 'pointer' }}
            alt="social-metamask"
          />
        </StyledIconButton>

        <StyledIconButton onClick={handleGoogleLogin}>
          <Image
            src="/assets/images/auth/trustwallet.svg"
            sx={{ width: 24, height: 24 }}
            style={{ cursor: 'pointer' }}
            alt="social-trustwallet"
          />
        </StyledIconButton>
        <StyledIconButton onClick={handleGoogleLogin}>
          <Image
            src="/assets/images/auth/coinbase.svg"
            sx={{ width: 24, height: 24 }}
            style={{ cursor: 'pointer' }}
            alt="social-coinbase"
          />
        </StyledIconButton>

        <StyledIconButton color="inherit" onClick={handleGoogleLogin}>
          <Image
            src="/assets/images/auth/google.svg"
            sx={{ width: 24, height: 24 }}
            style={{ cursor: 'pointer' }}
            alt="social-google"
          />
        </StyledIconButton>

        <StyledIconButton onClick={handleTwitterLogin}>
          <Image
            src="/assets/images/auth/twitter.svg"
            sx={{ width: 24, height: 'auto' }}
            style={{ cursor: 'pointer' }}
            alt="social-twitter"
          />
        </StyledIconButton>
      </Stack>
    </div>
  );
}
