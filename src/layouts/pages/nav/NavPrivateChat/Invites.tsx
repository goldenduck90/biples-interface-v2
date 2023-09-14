import * as React from 'react';
import { Stack, Typography, Collapse } from '@mui/material';
import InviteItem from './InviteItem';
import SvgColor from '../../../../components/svg-color';
// import Scrollbar from '../../../../components/scrollbar';

interface InvitesProps {}

const Invites = (props: InvitesProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        pl={2}
        sx={{
          height: 45,
          bgcolor: 'background.default',
          border: 'none',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
        onClick={() => setOpen((state) => !open)}
      >
        <SvgColor
          src="/assets/images/svgs/arrow-down.svg"
          sx={{
            transform: open ? 'scaleY(-1)' : 'scaleY(1)',
            width: 12,
            height: 14,
          }}
        />
        <Typography
          variant="body1"
          fontWeight={500}
          sx={{
            pl: 1,
            backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          Invites (3)
        </Typography>
      </Stack>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {/* <Scrollbar
          sx={{
            height: 200,
            '& .simplebar-content': {
              height: 200,
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        > */}
        <Stack spacing={2}>
          {Array.from(Array(3)).map((_, index) => (
            <InviteItem key={index} />
          ))}
        </Stack>
        {/* </Scrollbar> */}
      </Collapse>
    </>
  );
};

export default Invites;
