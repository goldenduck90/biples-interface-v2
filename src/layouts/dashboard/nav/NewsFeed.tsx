import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import SvgColor from '../../../components/svg-color';
import { StyledRootBox } from './styles';
import FeedItem from './FeedItem';
import Scrollbar from '../../../components/scrollbar';

const NewsFeed = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  return (
    <StyledRootBox sx={{ py: 2 }}>
      <Box
        sx={{
          height: 45,
          bgcolor: theme.palette.background.default,
          borderColor: theme.palette.mode === 'dark' ? 'transparent' : '#C7C7C7',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '15px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 2,
          cursor: 'pointer',
        }}
        onClick={() => setOpen((state) => !open)}
      >
        <SvgColor
          src="/assets/images/svgs/arrow-down.svg"
          sx={{
            transform: 'scaleY(-1)',
            width: 12,
            height: 14,
            color: theme.palette.primary.contrastText,
          }}
        />
        <Typography sx={{ color: theme.palette.primary.contrastText, pl: 2 }}>
          News Feed (45)
        </Typography>
      </Box>
      <Collapse in={open}>
        <Scrollbar
          sx={{
            height: 1,
            '& .simplebar-content': {
              height: 1,
              display: 'flex',
              flexDirection: 'column',
            },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {Array.from(Array(15)).map((_, index) => (
              <FeedItem key={index} />
            ))}
          </Box>
        </Scrollbar>
      </Collapse>
    </StyledRootBox>
  );
};

export default NewsFeed;
