import * as React from 'react';
import { FC } from 'react';
import { Button, Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
  height: 30,
  width: 130,
}));

interface DragDropFileProps {}

// drag drop file component
const DragDropFile: FC<DragDropFileProps> = () => {
  // drag state
  const [dragActive, setDragActive] = React.useState(false);
  // ref
  const inputRef = React.useRef(null);

  // eslint-disable-next-line func-names
  const handleFile = function (files: any) {
    alert(`Number of files: ${files.length}`);
  };

  // handle drag events
  // eslint-disable-next-line func-names
  const handleDrag = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  // triggers when file is selected with click
  const handleChange = (e: any) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files);
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <Stack
      justifyContent="center"
      sx={{
        height: '124px',
        textAlign: 'center',
        position: 'relative',
        borderWidth: '1px',
        borderRadius: '10px',
        borderStyle: 'dashed',
        borderColor: 'primary.contrastText',
      }}
      // eslint-disable-next-line react/jsx-no-bind
      onDragEnter={handleDrag}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        ref={inputRef}
        type="file"
        style={{ display: 'none' }}
        multiple
        onChange={handleChange}
      />
      <Stack spacing={2} alignItems="center">
        <Typography variant="body2">Drag and drop your file here or</Typography>
        <StyledButton variant="contained" onClick={onButtonClick}>
          Select file
        </StyledButton>
      </Stack>
      {dragActive && (
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '1rem',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
          }}
          onDragEnter={() => handleDrag}
          onDragLeave={() => handleDrag}
          onDragOver={() => handleDrag}
          onDrop={() => handleDrop}
        />
      )}
    </Stack>
  );
};
export default DragDropFile;
