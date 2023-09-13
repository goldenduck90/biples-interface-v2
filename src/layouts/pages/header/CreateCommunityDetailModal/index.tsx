import * as Yup from 'yup';
import { ChangeEvent, FC, useState, useCallback } from 'react';
import { styled } from '@mui/material/styles';
import {
  Divider,
  DialogContent,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  Dialog,
  IconButton,
  Stack,
  TextField,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// utils
import DragDropFile from './DragDropFile';
import { StyledOutlinedInput, StyledItem } from './styles';
import { CustomFile } from '../../../../components/upload';
import Image from '../../../../components/image';
import Iconify from '../../../../components/iconify';
import { useSnackbar } from '../../../../components/snackbar';
import FormProvider, { RHFUploadAvatar } from '../../../../components/hook-form';

export const StyledLoadingButton = styled(LoadingButton)(({ theme }) => ({
  background: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
  height: 55,
  width: 266,
}));

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3, 0, 7, 0),
  },
}));

interface CreateCommunityDetailModalProps {
  open: boolean;
  option: string;
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

const CreateCommunityDetailModal: FC<CreateCommunityDetailModalProps> = ({
  open,
  option,
  handleClose,
}) => {
  const [checkedSolana, setCheckedSolana] = useState<boolean>(true);
  const [checkedEth, setCheckEth] = useState<boolean>(true);
  const { enqueueSnackbar } = useSnackbar();

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

  const handleChangeSolana = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedSolana(event.target.checked);
  };

  const handleChangeEth = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckEth(event.target.checked);
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
        aria-labelledby="create-community-detail-dialog-title"
        open={open}
        maxWidth="xl"
        PaperProps={{
          style: {
            background: 'rgba(21, 21, 21, 0.85)',
            backdropFilter: 'blur(14px)',
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'primary.contrastText',
          }}
        >
          <Iconify icon="eva:close-fill" />
        </IconButton>
        <DialogContent sx={{ width: '680px' }}>
          <StyledItem>
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
            <Stack alignItems="start" spacing={1} sx={{ width: '350px' }}>
              <Typography variant="body1" sx={{ fontWeight: '600' }}>
                Server Name*
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Server name here..."
                sx={{ color: 'primary.contrastText' }}
              />
            </Stack>
          </StyledItem>

          <Divider sx={{ color: 'primary.main' }} />

          <StyledItem>
            <Stack spacing={1} sx={{ width: '245px' }}>
              <Typography variant="body1" sx={{ fontWeight: '600' }}>
                Background Image
              </Typography>
              <DragDropFile />
            </Stack>
            <Stack spacing={1}>
              <Typography variant="body1" sx={{ fontWeight: '600' }}>
                Description
              </Typography>
              <TextField
                InputLabelProps={{ shrink: false }}
                multiline
                rows={4}
                placeholder="Description here..."
                sx={{
                  backgroundColor: 'primary.main',
                  borderRadius: '10px',
                  fontSize: '15px',
                  color: '#565A7F',
                  width: '245px',
                }}
              />
            </Stack>
          </StyledItem>

          <Divider sx={{ color: 'primary.main' }} />

          <StyledItem>
            <Stack spacing={1} sx={{ width: '245px' }}>
              <Typography variant="body1" sx={{ fontWeight: '600' }}>
                Twitter*
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Twitter link here..."
                sx={{ color: 'primary.contrastText' }}
              />
            </Stack>
            <Stack spacing={1} sx={{ width: '245px' }}>
              <Typography variant="body1" sx={{ fontWeight: '600' }}>
                Website
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Website link here..."
                sx={{ color: 'primary.contrastText' }}
              />
            </Stack>
          </StyledItem>

          <StyledItem>
            <Stack spacing={1} sx={{ width: '245px' }}>
              <Typography variant="body1" sx={{ fontWeight: '600' }}>
                Medium
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Medium link here..."
                sx={{ color: 'primary.contrastText' }}
              />
            </Stack>
            <Stack spacing={1} sx={{ width: '245px' }}>
              <Typography variant="body1" sx={{ fontWeight: '600' }}>
                Personalized invitation link
              </Typography>
              <StyledOutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Invitation link here..."
                sx={{ color: 'primary.contrastText' }}
              />
              <Typography
                variant="caption"
                sx={{
                  backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Invite your friends with your invitation link
              </Typography>
            </Stack>
          </StyledItem>
          <Divider sx={{ color: 'primary.main' }} />
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={6}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedEth}
                  onChange={handleChangeEth}
                  icon={
                    <Image
                      disabledEffect
                      src="/assets/images/auth/unchecked.svg"
                      alt=""
                      sx={{ width: 'auto', height: 14 }}
                    />
                  }
                  checkedIcon={
                    <Image
                      disabledEffect
                      src="/assets/images/auth/checked.svg"
                      alt=""
                      sx={{ width: 'auto', height: 14 }}
                    />
                  }
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label={
                <Image
                  disabledEffect
                  src="/assets/images/svgs/eth.svg"
                  alt=""
                  sx={{ width: 46, height: 68 }}
                />
              }
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checkedSolana}
                  onChange={handleChangeSolana}
                  icon={
                    <Image
                      disabledEffect
                      src="/assets/images/auth/unchecked.svg"
                      alt=""
                      sx={{ width: 'auto', height: 14 }}
                    />
                  }
                  checkedIcon={
                    <Image
                      disabledEffect
                      src="/assets/images/auth/checked.svg"
                      alt=""
                      sx={{ width: 'auto', height: 14 }}
                    />
                  }
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label={
                <Image
                  disabledEffect
                  src="/assets/images/svgs/solana.svg"
                  alt=""
                  sx={{ width: 40, height: 40 }}
                />
              }
            />
          </Stack>
          <Stack alignItems="center">
            <StyledLoadingButton type="submit" variant="contained" loading={isSubmitting}>
              Create
            </StyledLoadingButton>
          </Stack>
        </DialogContent>
      </StyledDialog>
    </FormProvider>
  );
};

export default CreateCommunityDetailModal;
