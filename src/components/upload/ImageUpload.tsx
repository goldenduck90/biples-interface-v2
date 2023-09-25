import { useDropzone } from 'react-dropzone';
// @mui
import { Box, Button, IconButton, Typography, StackProps } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
// assets
// import { UploadIllustration } from '../../assets/illustrations';
import Iconify from '../iconify';
//
import { UploadProps } from './types';
import RejectionFiles from './errors/RejectionFiles';
import SingleFilePreview from './preview/SingleFilePreview';

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
  height: 45,
  padding: 0,
  minWidth: 196,
}));

// ----------------------------------------------------------------------

const StyledDropZone = styled('div')(({ theme }) => ({
  outline: 'none',
  cursor: 'pointer',
  overflow: 'hidden',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  transition: theme.transitions.create('padding'),
  backgroundColor: theme.palette.background.neutral,
}));

// ----------------------------------------------------------------------

export default function ImageUpload({
  disabled,
  multiple = false,
  error,
  helperText,
  //
  file,
  onDelete,
  //
  files,
  thumbnail,
  onUpload,
  onRemove,
  onRemoveAll,
  sx,
  ...other
}: UploadProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject, fileRejections } = useDropzone({
    multiple,
    disabled,
    ...other,
  });

  const hasFile = !!file && !multiple;
  const isError = isDragReject || !!error;

  return (
    <Box sx={{ width: 1, position: 'relative', ...sx }}>
      <StyledDropZone
        {...getRootProps()}
        sx={{
          ...(isDragActive && {
            opacity: 0.72,
          }),
          ...(isError && {
            color: 'error.main',
            bgcolor: 'error.lighter',
            borderColor: 'error.light',
          }),
          ...(disabled && {
            opacity: 0.48,
            pointerEvents: 'none',
          }),
        }}
      >
        <input {...getInputProps()} />

        <Placeholder
          sx={{
            ...(hasFile && {
              opacity: 0,
            }),
          }}
        />

        {hasFile && <SingleFilePreview file={file} />}
      </StyledDropZone>

      {helperText && helperText}

      <RejectionFiles fileRejections={fileRejections} />

      {hasFile && onDelete && (
        <IconButton
          size="small"
          onClick={onDelete}
          sx={{
           
            top: 16,
            right: 16,
            zIndex: 9,
            position: 'absolute',
            color: (theme) => alpha(theme.palette.common.white, 0.8),
            bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
            '&:hover': {
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.48),
            },
          }}
        >
          <Iconify icon="eva:close-fill" width={18} />
        </IconButton>
      )}
    </Box>
  );
}

// ----------------------------------------------------------------------

function Placeholder({ sx, ...other }: StackProps) {
  return (
    <Box
      sx={{
        minWidth: '140px',
        minHeight:'140px',
        align: 'center',
        borderRadius:'8px',
        textAlign:'center',
        padding:'15px',
        border: '0.5px dashed var(--ligh-text, #F0F0F0)',
      }}
    >
      <Typography 
        variant='caption'
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
          fontFeatureSettings:'"clig" off, "liga" off',
          height:25,
          minWidth:100
        }}
      >
        <Typography sx={{fontSize: '13px'}}>
          Select file
        </Typography>
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
  );
}
