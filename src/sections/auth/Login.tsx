// next
import NextLink from 'next/link';
// @mui
import { Stack, Typography, Link } from '@mui/material';
// layouts
import LoginLayout from '../../layouts/login';
// routes
import { PATH_AUTH } from '../../routes/paths';
//
import AuthLoginForm from './AuthLoginForm';
import AuthWithSocial from './AuthWithSocial';

// ----------------------------------------------------------------------

export default function Login() {
  return (
    <LoginLayout>
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 5 }}>
        <Typography variant="h4">Sign In</Typography>

        <Stack direction="row" spacing={0.5}>
          <Link component={NextLink} href={PATH_AUTH.register} variant="subtitle2">
            Create an account
          </Link>
          <Typography variant="body2">instead?</Typography>
        </Stack>
      </Stack>

      <AuthLoginForm />

      <AuthWithSocial />
    </LoginLayout>
  );
}
