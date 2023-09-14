import React from 'react';
import { Typography, Avatar, Stack, IconButton } from '@mui/material';
import SvgColor from '../../../../components/svg-color';

const InviteItem = () => {
  const handleAccept = () => {
    console.log('accept');
  };

  const handleDelete = () => {
    console.log('delete');
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Stack direction="row" alignItems="center" spacing={1}>
        <Avatar alt="User" src="/assets/images/5.png" sx={{ width: 35, height: 35 }} />
        <Typography
          variant="body2"
          fontWeight={500}
          sx={{
            backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Dave Bronx
        </Typography>
      </Stack>
      <Stack direction="row" alignItems="center" spacing={1}>
        <IconButton
          onClick={handleAccept}
          sx={{
            width: '37px',
            height: '25px',
            backgroundColor: '#00AF1C',
            border: 'none',
            borderRadius: '7px',
            '&:hover': {
              backgroundColor: '#00740B',
            },
          }}
        >
          <SvgColor
            src="/assets/images/svgs/check-white-filled.svg"
            sx={{
              width: 11,
              height: 11,
              color: 'primary.contrastText',
            }}
          />
        </IconButton>
        <IconButton
          onClick={handleDelete}
          sx={{
            width: '37px',
            height: '25px',
            backgroundColor: 'primary.main',
            borderStyle: 'solid',
            borderColor: '#E82B2B',
            borderWidth: '1px',
            borderRadius: '7px',
          }}
        >
          <SvgColor
            src="/assets/images/svgs/delete.svg"
            sx={{
              width: 11,
              height: 11,
              color: '#E82B2B',
            }}
          />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default InviteItem;
