import { useState } from 'react';
import * as Yup from 'yup';
// next
import NextLink from 'next/link';
import Image from 'next/image';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import {
  Link,
  Stack,
  Alert,
  IconButton,
  InputAdornment,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH } from '../../routes/paths';
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
  afterSubmit?: string;
};

export default function AuthLoginForm() {
  const { login } = useAuthContext();

  const [showPassword, setShowPassword] = useState(false);
  const [checkedVisible, setCheckedVisible] = useState<boolean>(true);

  const handleChangeVisible = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedVisible(event.target.checked);
  };

  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: 'demo@minimals.cc',
    password: 'demo1234',
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(LoginSchema),
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
      await login(data.email, data.password);
    } catch (error) {
      console.log(error);
      reset();
      setError('afterSubmit', {
        ...error,
        message: error.message || error,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={5}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

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
          autoComplete="current-password"
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

      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ my: 3 }}>
        <FormControlLabel
          sx={{ ml: -1 }}
          control={
            <Checkbox
              checked={checkedVisible}
              onChange={handleChangeVisible}
              icon={<Image src="/assets/images/auth/unchecked.svg" alt="" width={12} height={12} />}
              checkedIcon={
                <Image src="/assets/images/auth/checked.svg" alt="" width={12} height={12} />
              }
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Remember me"
        />
        <Link
          component={NextLink}
          href={PATH_AUTH.resetPassword}
          variant="caption"
          sx={{ color: '#4079E4' }}
        >
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitSuccessful || isSubmitting}
        sx={{
          background: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
          color: 'common.white',
          height: 54,
          fontSize: 16,
        }}
      >
        Sign in
      </LoadingButton>
    </FormProvider>
  );
}
