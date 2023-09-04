// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link } from '@mui/material';
// layouts
import LoginLayout from '../../layouts/login';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
import AuthRegisterForm from './AuthRegisterForm';

// ----------------------------------------------------------------------

export default function Register() {
  return (
    <LoginLayout>
      <AuthRegisterForm />

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0.5}
        sx={{ mt: 2 }}
      >
        <Typography variant="body2"> Already have an account? </Typography>

        <Link
          component={NextLink}
          href={PATH_AUTH.login}
          variant="subtitle2"
          underline="always"
          color="#FB15FF"
        >
          Sign in
        </Link>
      </Stack>

      <Typography
        component="div"
        fontSize={8}
        sx={{ color: 'text.secondary', mt: 2, textAlign: 'center' }}
      >
        {'*by clicking “sign up” button you are agree with our '}
        <Link underline="always" component={NextLink} href={PATH_AUTH.register}>
          privacy policy
        </Link>
        {' and '}
        <Link underline="always" component={NextLink} href={PATH_AUTH.register}>
          terms & condition.
        </Link>
        .
      </Typography>
    </LoginLayout>
  );
}
