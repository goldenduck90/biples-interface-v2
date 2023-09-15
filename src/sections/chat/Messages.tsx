// @mui
import { styled } from '@mui/material/styles';
import { Stack, Divider, InputAdornment, OutlinedInput, IconButton } from '@mui/material';

import Scrollbar from '../../components/scrollbar';
import SvgColor from '../../components/svg-color';
import MessageItem from './MessageItem';
// config
import { HEADER } from '../../config-global';


const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '0px 16px',
  borderRadius: '10px',
}));

export default function Messages() {
  return (
    <Stack sx={{ height: `calc(100vh - ${HEADER.H_HOME_DESKTOP + 96 + 48}px)` }}>
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
        {Array.from(Array(3)).map((_, index) => (
          <MessageItem key={index} active />
        ))}
        <MessageItem active={false} />
      </Scrollbar>
      <Divider sx={{ color: 'primary.contrastText', mb: 2 }} />
      <StyledOutlinedInput
        defaultValue=""
        fullWidth
        placeholder="Write a message..."
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <SvgColor
                src="/assets/images/svgs/emoji_emotions.svg"
                sx={{ width: 30, height: 30, color: 'primary.contrastText' }}
              />
            </IconButton>
            <IconButton>
              <SvgColor
                src="/assets/images/svgs/mic.svg"
                sx={{ width: 30, height: 30, color: 'primary.contrastText' }}
              />
            </IconButton>
          </InputAdornment>
        }
      />
    </Stack>
  );
}
