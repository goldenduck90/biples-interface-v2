import * as Yup from 'yup';
import * as React from 'react';
import { ChangeEvent,useState, useCallback } from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Box,
  Button,
  Stack,
  Typography,
  Divider,
  TextField,
  FormControlLabel, 
  Checkbox,
} from '@mui/material';

// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// auth
// import { useAuthContext } from '../../auth/useAuthContext';
import {
  StyledButton
} from './styles';
import { CustomFile, ImageUpload } from '../../components/upload';
import { useSnackbar } from '../../components/snackbar';
import FormProvider, { RHFUploadAvatar, RHFTextField } from '../../components/hook-form';
import Image from '../../components/image';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
}

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

export default function Panel() {
  
  const methods = useForm<FormValuesProps>({
    resolver: yupResolver(UpdateUserSchema),
    defaultValues,
  });
  
  const {
    setValue,
    handleSubmit,
    // formState: { isSubmitting },
  } = methods;
  
  const { enqueueSnackbar } = useSnackbar();

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
  
  const onSubmit = async (data: FormValuesProps) => {
    try {
      // handle form submission
    } catch (error) {
      enqueueSnackbar(error.message, { variant: 'error' });
    }
  };
  // Private check buttom
  const [privateVisible, setPrivate] = useState<boolean>(true);
  const handlePrivate = (event: ChangeEvent<HTMLInputElement>) => {
    setPrivate(event.target.checked);
  };

  const [publicVisible, setPublic] = useState<boolean>(false);
  const handlePublic = (event: ChangeEvent<HTMLInputElement>) => {
    setPublic(event.target.checked);
  };
  
  const [file, setFile] = useState<File | string | null>(null);
  const handleDropSingleFile = useCallback((acceptedFiles: File[]) => {
    const newFile = acceptedFiles[0];
    if (newFile) {
      setFile(
        Object.assign(newFile, {
          preview: URL.createObjectURL(newFile),
        })
      );
    }
  }, []);

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack 
        sx={{
          marginLeft:6,
          marginRight:6,
        }}
      >
        <Grid container columnSpacing={{ xl: 4, md:4, sm: 3, xs:3 }}>
          <Grid xl={6} md={6} sm={12} xs={12} >
            <Grid container columnSpacing={{ xl: 4, md:4, sm: 3, xs:3 }}>
              <Grid xl={6} md={6} sm={12} xs={12}>
                <Stack spacing={2} textAlign='center'>
                  <Box
                    sx={{
                      width: '180px',
                      height: '180px',
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
                </Stack>
              </Grid>
              <Grid xl={6} md={6} sm={12} xs={12}>
                <Stack spacing={1} pt={2} > 
                  <StyledButton 
                    sx={{
                      color: '#FFF',
                      marginTop:6,
                      maxWidth: '240px',
                      minWidth: '150px',
                    }}
                    // onClick={VerifyHandle}
                  >
                    <Typography
                      variant='button'
                    >
                      Upload Image
                    </Typography>
                  </StyledButton>
                  <Typography
                    color='grey'
                    align='center'
                    fontSize={11} 
                  >
                    We recommend an image of at least 512x512px.
                  </Typography>
                </Stack>
              </Grid>
            </Grid> 
          </Grid>
          <Grid xl={6} md={6} sm={12} xs={12} >
            <Stack 
              spacing={1}
              pt={3}
            >
              <Typography 
                variant='subtitle2'
              >
                Server Name*
              </Typography>
              <RHFTextField
                sx={{
                  borderRadius:'8px',
                  minWidth: '150px',
                  backgroundColor:'var(--frame-fill, rgba(104, 104, 104, 0.22))'
                }}
                name="twitter"
                placeholder="Server name here..."
                label=""
                InputLabelProps={{ shrink: false }}
                inputProps={{
                  style: {
                    color:'#565A7F',
                    borderRadius:'8px',
                    fontSize: '12px',
                    height:'16px'
                  }
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack 
        spacing={5}
        sx={{
          marginLeft:6,
          marginRight:6,
        }}
      >
        <Grid container columnSpacing={{ xl: 5, md:4, sm: 3, xs:3 }}>
          <Grid xl={6} md={6} sm={12} xs={12} >
            <Stack spacing={1} >
              <Typography 
                variant='subtitle2'
                mt={0.5}
              >
                Background Image
              </Typography>
              <ImageUpload file={file} onDrop={handleDropSingleFile} onDelete={() => setFile(null)} />
            </Stack>
          </Grid>
          <Grid xl={6} md={6} sm={12} xs={12}>
            <Stack spacing={1} >
              <Typography 
                variant='subtitle1'
              >
                Description
              </Typography>
              <TextField 
                sx={{
                  height: '142px',
                  minWidth: '140px',
                  borderRadius:'8px',
                  backgroundColor:'var(--frame-fill, rgba(104, 104, 104, 0.22))'
                }}
                multiline
                rows={5}
                name="Description"
                placeholder="Server name here..."
                label=""
                variant="outlined"
                InputLabelProps={{ shrink: false }}
                inputProps={{
                  style: {
                    color:'#565A7F',
                    borderRadius:'8px',
                    fontSize: '12px',
                  }
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack 
        sx={{
          marginLeft:'50px',
          marginRight:'50px'
        }}
      >
        <Grid container columnSpacing={{ xl: 5, md:4, sm: 3, xs:3 }}>
          <Grid xl={4} md={4} sm={12} xs={12}>
            <Stack spacing={1}>
              <Typography 
                variant='subtitle1'
              >
                Twitter*
              </Typography>
              <RHFTextField
                name="twitter"
                placeholder="Twitter link here..."
                label=""
                InputLabelProps={{ shrink: false }}
                inputProps={{
                  style: {
                    color:'#565A7F',
                    borderRadius:'8px',
                    fontSize: '12px',
                    fontWeight:400,
                    fontFeatureSettings:'"clig" off, "liga" off',
                    letterSpacing:'-0.333px',
                    height: '12px',
                    minWidth: '100px',
                    backgroundColor:'var(--frame-fill, rgba(104, 104, 104, 0.22))'
                  }
                }}
              />
            </Stack>
          </Grid>
          <Grid xl={4} md={4} sm={12} xs={12}>
            <Stack spacing={1}>
            <Typography 
              variant='subtitle1'
            >
              Medium
            </Typography>
            <RHFTextField
              name="medium"
              placeholder="Medium link here..."
              label=""
              InputLabelProps={{ shrink: false }}
              inputProps={{
                style: {
                  borderRadius:'8px',
                  fontSize: '12px',
                  fontWeight:400,
                  fontFeatureSettings:'"clig" off, "liga" off',
                  letterSpacing:'-0.333px',
                  height: '12px',
                  minWidth: '100px',
                  backgroundColor:'var(--frame-fill, rgba(104, 104, 104, 0.22))'
                }
              }}
            />
            </Stack>
          </Grid>
          <Grid xl={4} md={4} sm={12} xs={12}>
            <Stack spacing={1}>
            <Typography 
              variant='subtitle1'
            >
              Website
            </Typography>
            <RHFTextField
              name="twitter"
              placeholder="Website link here..."
              label=""
              InputLabelProps={{ shrink: false }}
              inputProps={{
                style: {
                  color:'#565A7F',
                  borderRadius:'8px',
                  fontSize: '12px',
                  fontWeight:400,
                  letterSpacing:'-0.333px',
                  height: '12px',
                  minWidth: '100px',
                  backgroundColor:'var(--frame-fill, rgba(104, 104, 104, 0.22))'
                }
              }}
            />
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack 
        sx={{marginLeft:6, marginRight:6}}
      >
        <Grid container columnSpacing={{ xl: 5, md:4, sm: 3, xs:3 }}>
          <Grid xl={6} md={6} sm={12} xs={12}>
            <Stack spacing={1} pt={2} > 
              <Typography
                variant ='subtitle2'
              >
                Access
              </Typography>
              <Typography
                variant='body2'
              >
                Decide who can join your community
              </Typography>
            </Stack>
          </Grid>
          <Grid xl={3} md={3} sm={12} xs={12}>
            <Stack spacing={1} pt={2} > 
              <StyledButton 
                sx={{
                  maxWidth: '240px',
                  minWidth: '150px',
                }}
                // onClick={VerifyHandle}
              >
                <FormControlLabel
                  control={
                  <Checkbox
                    checked={privateVisible}
                    onChange={handlePrivate}
                    icon={
                      <Image
                        disabledEffect
                        src="/assets/images/auth/unchecked.svg"
                        alt=""
                        sx={{ width: 12, height: 'auto' }}
                      />
                    }
                    checkedIcon={
                      <Image
                        disabledEffect
                        src="/assets/images/auth/checked.svg"
                        alt=""
                        sx={{ width: 12, height: 'auto' }}
                      />
                    }
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                  }
                  label="Private"
                />
              </StyledButton>
              
              <Typography
                align='center'
                variant='body2'
              >
                With invitation
              </Typography>
            </Stack>
          </Grid>
          <Grid xl={3} md={3} sm={12} xs={12}>
            <Stack spacing={1} pt={2} > 
              <StyledButton 
                sx={{
                  color: '#FFF',
                  fontFeatureSettings:'"clig" off, "liga" off',
                  fontSize:15,
                  fontStyle:'normal',
                  fontFamily:'TT Firs Neue',
                  fontWeight:600,
                  letterSpacing:'-0.333px',
                  maxWidth: '240px',
                  minWidth: '150px',
                }}
                // onClick={VerifyHandle}
              >
                <FormControlLabel
                  control={
                  <Checkbox
                    checked={publicVisible}
                    onChange={handlePublic}
                    icon={
                      <Image
                        disabledEffect
                        src="/assets/images/auth/unchecked.svg"
                        alt=""
                        sx={{ width: 12, height: 'auto' }}
                      />
                    }
                    checkedIcon={
                      <Image
                        disabledEffect
                        src="/assets/images/auth/checked.svg"
                        alt=""
                        sx={{ width: 12, height: 'auto' }}
                      />
                    }
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                  }
                  label="Public"
                />
              </StyledButton>
              <Typography
                 align='center'
                 variant='body2'
              >
                Everyone can find your channel
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack sx={{marginLeft:6, marginRight:6}}>
        <Grid container columnSpacing={{ xl: 5, md:4, sm: 3, xs:3 }}>
          <Grid xl={4} md={3} sm={12} xs={12}>
            <Stack spacing={1} > 
              <Typography
                variant='subtitle2' 
              >
                Personalized invitation link
              </Typography>
              <RHFTextField
              name="Personalized"
              placeholder="https://biples.netlfy.app/r/qrlEu32B"
              label=""
              InputLabelProps={{ shrink: false }}
              inputProps={{
                style: {
                  color:'white',
                  borderRadius:'8px',
                  fontSize: '12px',
                  fontWeight:400,
                  fontFeatureSettings:'"clig" off, "liga" off',
                  letterSpacing:'-0.333px',
                  height: '12px',
                  minWidth: '100px',
                  backgroundColor:'var(--bg-color, #111)'
                }
              }}
            />
            </Stack>
          </Grid>
          <Grid xl={4} md={3} sm={12} xs={12}>
            <Stack spacing={1} pt={3} pl={-3}> 
              <Button 
                sx={{
                  backgroundColor:'var(--bg-color, #111)',
                  width:'30px',
                  height:'45px',
                  marginTop:'10px'
                }}
              >
                <Image 
                  disabledEffect
                  src="/assets/images/svgs/Before.svg"
                  alt=""
                  sx={{ width: 20, height: 'auto' }}
                />
              </Button>
            </Stack>
          </Grid>
          <Grid xl={4} md={3} sm={12} xs={12}>
            <Stack spacing={1} pt={2} pl={9}> 
              <Button 
                sx={{
                  marginTop:'15px',
                  backgroundColor: '#E82B2B',
                  color: '#FFF',
                  height:45,
                }}
                // onClick={VerifyHandle}
              >
                <Typography
                  variant='button'
                >
                  Delete your channel
                </Typography>
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </FormProvider>
  );
}

