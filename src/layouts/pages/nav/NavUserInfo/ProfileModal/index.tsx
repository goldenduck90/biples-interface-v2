import * as Yup from 'yup';
import * as React from 'react';
import { ChangeEvent, FC, useState, useCallback } from 'react';
import ReactCodeInput from 'react-code-input';
import QRCode from 'react-qr-code';
import { useTheme, styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Typography,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  InputAdornment,
  FormControlLabel,
  FormControl,
  MenuItem,
  SelectChangeEvent,
  Select,
  Checkbox,
} from '@mui/material';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// auth
import { useAuthContext } from '../../../../../auth/useAuthContext';
import {
  StyledProfileImage,
  StyledOutlinedInput,
  StyledDialogActionButton,
  StyledButton,
} from './styles';
import ConnectWalletModal from './ConnectWalletModal';
import SvgColor from '../../../../../components/svg-color';
import Iconify from '../../../../../components/iconify';
import { CustomFile } from '../../../../../components/upload';
import { useSnackbar } from '../../../../../components/snackbar';
import Image from '../../../../../components/image';
import FormProvider, { RHFUploadAvatar, RHFTextField } from '../../../../../components/hook-form';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogTitle-root': {
    padding: theme.spacing(4, 8),
    fontWeight: 500,
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3, 8),
  },
  // '& .MuiDialogActions-root': {
  //   padding: theme.spacing(4, 8),
  // },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function StyledDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle {...other}>
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            pr: 3,
            color: 'primary.contrastText',
          }}
        >
          <Iconify icon="eva:arrow-back-fill" />
        </IconButton>
      ) : null}
      {children}
    </DialogTitle>
  );
}

interface ProfileModalProps {
  open: boolean;
  handleClose: () => void;
}

type FormValuesProps = {
  displayName: string;
  email: string;
  photoURL: CustomFile | string | null;
  phoneNumber: string | null;
  country: string | null;
  address: string | null;
  state: string | null;
  city: string | null;
  zipCode: string | null;
  about: string | null;
  isPublic: boolean;
};

const ProfileModal: FC<ProfileModalProps> = ({ open, handleClose }) => {
  const { user } = useAuthContext();
  const theme = useTheme();
  const [checkedSound, setCheckedSound] = useState<boolean>(true);
  const [checkedPrivate, setCheckedPrivate] = useState<boolean>(true);
  const { enqueueSnackbar } = useSnackbar();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const UpdateUserSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required').email('Email must be a valid email address'),
    photoURL: Yup.mixed().required('Avatar is required'),
    phoneNumber: Yup.string().required('Phone number is required'),
    country: Yup.string().required('Country is required'),
    address: Yup.string().required('Address is required'),
    state: Yup.string().required('State is required'),
    city: Yup.string().required('City is required'),
    zipCode: Yup.string().required('Zip code is required'),
    about: Yup.string().required('About is required'),
  });

  const defaultValues = {
    displayName: '',
    email: '',
    photoURL: null,
    phoneNumber: '',
    country: '',
    address: '',
    city: '',
    zipCode: '',
    about: '',
    isPublic: false,
  };

  const handleChangeSound = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedSound(event.target.checked);
  };

  const handleChangePrivate = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedPrivate(event.target.checked);
  };

  const [filter, setFilter] = useState('none');

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  const [openConnectWallet, setConnectWalletOpen] = useState(false);
  const handleConnectWalletOpen = () => {
    setConnectWalletOpen(true);
  };
  const handleConnectWalletClose = () => {
    setConnectWalletOpen(false);
  };

  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });

  const {
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormValuesProps) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar('Update success!');
      console.log('DATA', data);
    } catch (error) {
      console.error(error);
    }
  };
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue('photoURL', newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );
  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <StyledDialog
        onClose={handleClose}
        aria-labelledby="profile-dialog-title"
        open={open}
        maxWidth="xl"
        PaperProps={{
          style: {
            background: 'rgba(21, 21, 21, 0.85)',
            backdropFilter: 'blur(14px)',
          },
        }}
      >
        <StyledDialogTitle id="profile-dialog-title" onClose={handleClose}>
          Account Settings
        </StyledDialogTitle>
        <Divider sx={{ color: 'primary.main' }} />
        <DialogContent>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <StyledProfileImage>
              <Box
                sx={{
                  width: '160px',
                  height: '160px',
                  border: 'double 3px transparent',
                  borderRadius: '50%',
                  backgroundImage:
                    'linear-gradient(rgba(21,21,21,1), rgba(21,21,21,1)), radial-gradient(circle at top left, #6AF6FF, #E140E4)',
                  backgroundOrigin: 'border-box',
                  backgroundClip: 'content-box, border-box',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
                }}
              >
                <RHFUploadAvatar name="photoURL" maxSize={3145728} onDrop={handleDrop} />
              </Box>

              <Typography
                variant="subtitle2"
                pt={1}
                sx={{
                  backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                {user?.displayName}
              </Typography>
            </StyledProfileImage>

            <Divider orientation="vertical" sx={{ mx: 8 }} flexItem />

            <Stack spacing={3}>
              <Stack spacing={1}>
                <Typography variant="subtitle2">Old Password</Typography>
                <RHFTextField
                  name="oldPassword"
                  placeholder="Old Password"
                  label=""
                  InputLabelProps={{ shrink: false }}
                  autoComplete="current-password"
                  type={showOldPassword ? 'text' : 'password'}
                  inputProps={{
                    style: {
                      height: '12px',
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowOldPassword(!showOldPassword)} edge="end">
                          <Iconify icon={showOldPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <Stack spacing={1}>
                <Typography variant="subtitle2">New Password</Typography>
                <RHFTextField
                  name="newPassword"
                  placeholder="New Password"
                  label=""
                  InputLabelProps={{ shrink: false }}
                  autoComplete="new-password"
                  type={showNewPassword ? 'text' : 'password'}
                  inputProps={{
                    style: {
                      height: '12px',
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={() => setShowNewPassword(!showNewPassword)} edge="end">
                          <Iconify icon={showNewPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
              <Stack spacing={1}>
                <Typography variant="subtitle2">Confirm Password</Typography>
                <RHFTextField
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  label=""
                  InputLabelProps={{ shrink: false }}
                  autoComplete="new-password"
                  type={showConfirmPassword ? 'text' : 'password'}
                  inputProps={{
                    style: {
                      height: '12px',
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          edge="end"
                        >
                          <Iconify
                            icon={showConfirmPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
                          />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            </Stack>

            <Divider orientation="vertical" sx={{ mx: 8 }} flexItem />

            <Stack>
              <Stack spacing={1}>
                <Typography variant="subtitle2">Notifications</Typography>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedPrivate}
                      onChange={handleChangePrivate}
                      icon={
                        <Image
                          disabledEffect
                          src="/assets/images/home/untoggle.svg"
                          alt=""
                          sx={{ width: 'auto', height: 18 }}
                        />
                      }
                      checkedIcon={
                        <Image
                          disabledEffect
                          src="/assets/images/home/toggle.svg"
                          alt=""
                          sx={{ width: 'auto', height: 18 }}
                        />
                      }
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  }
                  label="Private messages"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={checkedSound}
                      onChange={handleChangeSound}
                      icon={
                        <Image
                          disabledEffect
                          src="/assets/images/home/untoggle.svg"
                          alt=""
                          sx={{ width: 'auto', height: 18 }}
                        />
                      }
                      checkedIcon={
                        <Image
                          disabledEffect
                          src="/assets/images/home/toggle.svg"
                          alt=""
                          sx={{ width: 'auto', height: 18 }}
                        />
                      }
                      inputProps={{ 'aria-label': 'controlled' }}
                    />
                  }
                  label="Sound"
                />
              </Stack>

              <Divider sx={{ my: 2 }} />
              <Stack alignItems="center">
                <FormControl sx={{ minWidth: 196 }}>
                  <Select
                    value={filter}
                    onChange={handleChange}
                    sx={{
                      bgcolor: theme.palette.secondary.main,
                      borderRadius: '10px',
                      height: '45px',
                    }}
                  >
                    <MenuItem value="none">Select language</MenuItem>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="chinese">Chinese</MenuItem>
                  </Select>
                </FormControl>
              </Stack>

              <Divider sx={{ my: 2 }} />

              <Stack alignItems="center">
                <StyledButton variant="contained" onClick={handleConnectWalletOpen}>
                  Connect Wallet
                </StyledButton>
              </Stack>
            </Stack>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack spacing={1}>
              <Typography variant="subtitle2">Twitter</Typography>
              <RHFTextField
                name="twitter"
                placeholder="Twitter link here..."
                label=""
                InputLabelProps={{ shrink: false }}
                inputProps={{
                  style: {
                    height: '12px',
                    minWidth: '247px',
                  },
                }}
              />
            </Stack>
            <Stack spacing={1}>
              <Typography variant="subtitle2">Medium</Typography>
              <RHFTextField
                name="medium"
                placeholder="Medium link here..."
                label=""
                InputLabelProps={{ shrink: false }}
                inputProps={{
                  style: {
                    height: '12px',
                    minWidth: '247px',
                  },
                }}
              />
            </Stack>
            <Stack spacing={1}>
              <Typography variant="subtitle2">Website</Typography>
              <RHFTextField
                name="website"
                placeholder="Website link here..."
                label=""
                InputLabelProps={{ shrink: false }}
                inputProps={{
                  style: {
                    height: '12px',
                    minWidth: '247px',
                  },
                }}
              />
            </Stack>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Stack spacing={2}>
              <Typography variant="subtitle2">Two-factor Authentication</Typography>
              <Typography variant="caption">
                Download and install Google Authenticator. Enable Two-factor Authentication
                <br /> to protect your account from unauthorized access. Scan the QR code with your
                <br />
                Google Authenticator App or enter the secret key manually.
              </Typography>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
                <ReactCodeInput
                  type="text"
                  fields={6}
                  name="Enable 2FA"
                  inputMode="numeric"
                  inputStyle={{
                    margin: '4px',
                    width: '45px',
                    height: '45px',
                    borderRadius: '10px',
                    fontSize: '20px',
                    paddingLeft: '8px',
                    backgroundColor: 'black',
                    border: '1px solid',
                  }}
                />
                <StyledButton variant="contained">Enable</StyledButton>
              </Stack>
            </Stack>
            <Divider orientation="vertical" sx={{ mx: 6 }} flexItem />
            <Stack alignItems="center" justifyContent="center">
              <QRCode
                size={132}
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                value="hello"
                viewBox="0 0 132 132"
              />
            </Stack>
            <Divider orientation="vertical" sx={{ mx: 6 }} flexItem />

            <Stack spacing={2}>
              <Typography variant="subtitle2">Secret key</Typography>
              <Typography variant="caption">
                Write down this code, never reveal it to others. You
                <br />
                can use it to regain access to your account if there is
                <br />
                no access to the authenticator.
              </Typography>
              <StyledOutlinedInput
                value="323145214124seda31asertgh"
                readOnly
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton>
                      <SvgColor src="/assets/images/svgs/copy.svg" sx={{ width: 14, height: 14 }} />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between" pt={6} pb={3}>
            <StyledDialogActionButton variant="contained" sx={{ bgcolor: '#E82B2B' }}>
              Delete your account
            </StyledDialogActionButton>
            <StyledDialogActionButton variant="contained" sx={{ bgcolor: 'black' }}>
              Save changes
            </StyledDialogActionButton>
          </Stack>
        </DialogContent>
      </StyledDialog>
      <ConnectWalletModal open={openConnectWallet} handleClose={handleConnectWalletClose} />
    </FormProvider>
  );
};

export default ProfileModal;
