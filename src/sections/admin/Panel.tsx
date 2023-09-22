import * as Yup from 'yup';
import * as React from 'react';
import { ChangeEvent, FC, useState, useCallback, useRef } from 'react';
// import { useTheme, styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import {
  Box,
  // Image,
  Button,
  Stack,
  Typography,
  Divider,
  TextField,
} from '@mui/material';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// auth
// import { useAuthContext } from '../../auth/useAuthContext';
import {
  StyledButton
} from './styles';
import { CustomFile } from '../../components/upload';
import { useSnackbar } from '../../components/snackbar';
import FormProvider, { RHFUploadAvatar, RHFTextField } from '../../components/hook-form';

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
    formState: { isSubmitting },
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
  
  // const uploadAvatarRef = useRef(null);

  // const uploadFile =() => {
  //   // uploadAvatarRef.current.click();
  // };
  
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
                      fontFeatureSettings:'"clig" off, "liga" off',
                      fontSize:15,
                      fontStyle:'normal',
                      fontFamily:'TT Firs Neue',
                      fontWeight:600,
                      letterSpacing:'-0.333px',
                      marginTop:6,
                      maxWidth: '240px',
                      minWidth: '150px',
                    }}
                    // onClick={VerifyHandle}
                  >
                    Upload Image
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
              <Typography sx={{fontSize: '20px'}}>
                Server Name*
              </Typography>
              <RHFTextField
                sx={{
                  color:'#565A7F',
                  borderRadius:'8px',
                  fontSize: '12px',
                  fontWeight:400,
                  fontFeatureSettings:'"clig" off, "liga" off',
                  letterSpacing:'-0.333px',
                  minWidth: '150px',
                  backgroundColor:'var(--frame-fill, rgba(104, 104, 104, 0.22))'
                }}
                name="twitter"
                placeholder="Server name here..."
                label=""
                InputLabelProps={{ shrink: false }}
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
              <Typography sx={{fontSize: '20px'}}>
                Background Image
              </Typography>
              <Box
                sx={{
                  height: '142px',
                  minWidth: '140px',
                  align: 'center',
                  borderRadius:'8px',
                  textAlign:'center',
                  padding:'30px',
                  border: '0.5px dashed var(--ligh-text, #F0F0F0)',
                }}
              >
                <Typography 
                  sx={{fontSize: '12px'}}
                >
                  Drag and drop file here
                </Typography>
                <Typography
                  sx={{
                    fontSize: '12px',
                    marginBottom: 1,
                    }}
                >
                  or
                </Typography>
                <StyledButton 
                  sx={{
                    color: '#FFF',
                    fontFeatureSettings:'"clig" off, "liga" off',
                    fontSize:15,
                    fontStyle:'normal',
                    fontFamily:'TT Firs Neue',
                    fontWeight:600,
                    letterSpacing:'-0.333px',
                    height:25,
                    minWidth:100
                  }}
                >
                  <Typography sx={{fontSize: '13px'}}>
                    Select file
                  </Typography>
                  {/* <RHFUploadAvatar name="photoURL" maxSize={3145728} onDrop={handleDrop} /> */}
                </StyledButton>
                <Typography
                  sx={{
                    margin:'10px',
                    color:'#565A7F',
                    fontSize: '10px',
                    fontWeight:400,
                    letterSpacing:'-0.333px',
                  }}
                >
                  The image will appear when a member wants to join your channet via an invitation link
                </Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid xl={6} md={6} sm={12} xs={12}>
            <Stack spacing={1} >
              <Typography sx={{fontSize: '20px'}}>
                Description
              </Typography>
              <TextField 
                sx={{
                  height: '142px',
                  minWidth: '140px',
                  align: 'center',
                  color:'#565A7F',
                  borderRadius:'8px',
                  textAlign:'center',
                  fontFeatureSettings:'"clig" off, "liga" off',
                  letterSpacing:'-0.333px',
                  fontWeight:400,
                  fontSize: '12px',
                  backgroundColor:'var(--frame-fill, rgba(104, 104, 104, 0.22))',
                }}
                multiline
                rows={5}
                name="Description"
                placeholder="Server name here..."
                label=""
                variant="outlined"
                InputLabelProps={{ shrink: false }}
                // multiline
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
              <Typography sx={{fontSize: '20px'}}>
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
            <Typography sx={{fontSize: '20px'}}>
              Medium
            </Typography>
            <RHFTextField
              name="medium"
              placeholder="Medium link here..."
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
            <Typography sx={{fontSize: '20px'}}>
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
        </Grid>
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack 
        sx={{marginLeft:6, marginRight:6}}
      >
        <Grid container columnSpacing={{ xl: 5, md:4, sm: 3, xs:3 }}>
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
                Upload Image
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
                Upload Image
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
                Upload Image
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
                Upload Image
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
      </Stack>
      <Divider sx={{ my: 2 }} />
      <Stack sx={{marginLeft:6, marginRight:6}}>
        <Grid container columnSpacing={{ xl: 5, md:4, sm: 3, xs:3 }}>
          <Grid xl={4} md={3} sm={12} xs={12}>
            <Stack spacing={1} > 
              <Typography
                color='white'
                fontSize={13} 
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
                  color: '#FFF',
                  fontSize:15,
                  width:'44px',
                  height:'47px',
                  fontStyle:'normal',
                  fontFamily:'TT Firs Neue',
                  fontWeight:600,
                  // minWidth: '150px',
                }}
              >
               s
              </Button>
            </Stack>
          </Grid>
          <Grid xl={4} md={3} sm={12} xs={12}>
            <Stack spacing={1} pt={2} pl={9}> 
              <Button 
                sx={{
                  backgroundColor: '#E82B2B',
                  color: '#FFF',
                  fontFeatureSettings:'"clig" off, "liga" off',
                  fontSize:15,
                  height:45,
                  fontStyle:'normal',
                  fontFamily:'TT Firs Neue',
                  fontWeight:600,
                  letterSpacing:'-0.333px',
                }}
                // onClick={VerifyHandle}
              >
                Delete your channel
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </FormProvider>
  );
}

