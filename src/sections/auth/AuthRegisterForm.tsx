import { useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
// components
import Iconify from '../../components/iconify';
import FormProvider, { RHFTextField } from '../../components/hook-form';
import SvgColor from '../../components/svg-color';

// ----------------------------------------------------------------------

type FormValuesProps = {
  email: string;
  password: string;
  confirmPassword: string;
  username: string;
  afterSubmit?: string;
};

export default function AuthRegisterForm() {
  const { register } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const RegisterSchema = Yup.object().shape({
    username: Yup.string().required('First name required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password')], 'Passwords must match'),
  });

  const defaultValues = {
    username: '',
    email: '',
    password: '',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      if (register) {
        await register(data.email, data.password, data.username);
      }
    } catch (error) {
      console.error(error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message || error,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}
        <Stack spacing={1}>
          <Typography variant="body1">User Name</Typography>
          <RHFTextField
            name="username"
            placeholder="User Name"
            label=""
            InputLabelProps={{ shrink: false }}
            autoComplete="username"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgColor
                    src="/assets/images/auth/user.svg"
                    sx={{ width: 10, height: 10, color: '#5E6366' }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body1">Email Address</Typography>
          <RHFTextField
            name="email"
            placeholder="Email Address"
            label=""
            InputLabelProps={{ shrink: false }}
            autoComplete="email"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgColor
                    src="/assets/images/auth/email.svg"
                    sx={{ width: 10, height: 10, color: '#5E6366' }}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body1">Password</Typography>
          <RHFTextField
            name="password"
            placeholder="Password"
            label=""
            InputLabelProps={{ shrink: false }}
            autoComplete="new-password"
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgColor
                    src="/assets/images/auth/lock.svg"
                    sx={{ width: 10, height: 10, color: '#5E6366' }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
        <Stack spacing={1}>
          <Typography variant="body1">Confirm Password</Typography>
          <RHFTextField
            name="confirmPassword"
            placeholder="Confirm Password"
            label=""
            InputLabelProps={{ shrink: false }}
            autoComplete="new-password"
            type={showConfirmPassword ? 'text' : 'password'}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgColor
                    src="/assets/images/auth/lock.svg"
                    sx={{ width: 10, height: 10, color: '#5E6366' }}
                  />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    edge="end"
                  >
                    <Iconify icon={showConfirmPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>

        <LoadingButton
          fullWidth
          color="inherit"
          size="large"
          type="submit"
          variant="contained"
          loading={isSubmitting || isSubmitSuccessful}
          sx={{
            background: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
            color: 'common.white',
            height: 54,
            fontSize: 16,
          }}
        >
          Sign Up
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
