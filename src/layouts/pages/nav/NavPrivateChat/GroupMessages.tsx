import * as React from 'react';
import { Typography, Collapse, Stack, List } from '@mui/material';
import SvgColor from '../../../../components/svg-color';
// import Scrollbar from '../../../../components/scrollbar';
import GroupMessageItem from './GroupMessageItem';

const GroupMessages = () => {
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
        <Typography variant="body1" fontWeight={500} sx={{ pl: 1 }}>
          Group Messages (3)
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
          <List sx={{ width: '100%' }}>
            {Array.from(Array(3)).map((_, index) => (
              <GroupMessageItem key={index} />
            ))}
          </List>
        {/* </Scrollbar> */}
      </Collapse>
    </>
  );
};

export default GroupMessages;
