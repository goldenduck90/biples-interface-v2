import { useState } from 'react';
import * as Yup from 'yup';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, InputAdornment, Alert } from '@mui/material';
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

        <RHFTextField
          name="username"
          label="User name"
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

        <RHFTextField
          name="email"
          label="Email address"
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

        <RHFTextField
          name="password"
          label="Password"
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

        <RHFTextField
          name="confirmPassword"
          label="Confirm Password"
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
