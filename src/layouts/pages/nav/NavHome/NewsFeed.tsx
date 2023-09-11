import * as React from 'react';
import { Stack, Typography, List, Divider, Box } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import { StyledRoot } from '../styles';
import FeedItem from './FeedItem';
import SvgColor from '../../../../components/svg-color';
import Scrollbar from '../../../../components/scrollbar';

const NewsFeed = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <StyledRoot sx={{ py: 2 }}>
      <Stack
        direction="row"
        alignItems="center"
        pl={3}
        sx={{
          height: 45,
          bgcolor: 'background.default',
          border: 'none',
          borderRadius: '16px',
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
            color: 'primary.contrastText',
          }}
        />
        <Typography sx={{ color: 'primary.contrastText', pl: 2 }}>News Feed (45)</Typography>
      </Stack>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Scrollbar
          sx={{
            height: 483,
            '& .simplebar-content': {
              height: 483,
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <List sx={{ width: '100%' }}>
            {Array.from(Array(10)).map((_, index) => (
              <Box key={index}>
                <Divider sx={{ color: 'primary.main' }} />
                <FeedItem />
              </Box>
            ))}
          </List>
        </Scrollbar>
      </Collapse>
    </StyledRoot>
  );
};

export default NewsFeed;
