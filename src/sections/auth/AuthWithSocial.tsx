// @mui
import { Divider, IconButton, Stack } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Image from '../../components/image';

// ----------------------------------------------------------------------
const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '10px',
  width: '54px',
  height: '54px',
  backgroundColor: alpha('#686868', 0.22),
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
          my: 2.5,
          typography: 'overline',
          color: 'text.disabled',
          '&::before, ::after': {
            borderTopStyle: 'dashed',
          },
        }}
      >
        OR
      </Divider>

      <Stack direction="row" justifyContent="center" spacing={2}>
        <StyledIconButton onClick={handleGoogleLogin}>
          <Image
            src="/assets/images/auth/metamask.svg"
            sx={{ width: 'auto', height: 30 }}
            style={{ cursor: 'pointer' }}
            alt="social-metamask"
          />
        </StyledIconButton>

        <StyledIconButton onClick={handleGoogleLogin}>
          <Image
            src="/assets/images/auth/trustwallet.svg"
            sx={{ width: 'auto', height: 30 }}
            style={{ cursor: 'pointer' }}
            alt="social-trustwallet"
          />
        </StyledIconButton>
        <StyledIconButton onClick={handleGoogleLogin}>
          <Image
            src="/assets/images/auth/coinbase.svg"
            sx={{ width: 'auto', height: 30 }}
            style={{ cursor: 'pointer' }}
            alt="social-coinbase"
          />
        </StyledIconButton>

        <StyledIconButton color="inherit" onClick={handleGoogleLogin}>
          <Image
            src="/assets/images/auth/google.svg"
            sx={{ width: 'auto', height: 30 }}
            style={{ cursor: 'pointer' }}
            alt="social-google"
          />
        </StyledIconButton>

        <StyledIconButton onClick={handleTwitterLogin}>
          <Image
            src="/assets/images/auth/twitter.svg"
            sx={{ width: 'auto', height: 30 }}
            style={{ cursor: 'pointer' }}
            alt="social-twitter"
          />
        </StyledIconButton>
      </Stack>
    </div>
  );
}
