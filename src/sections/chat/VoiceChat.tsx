import { useState } from 'react';

// @mui
import { styled } from '@mui/material/styles';
import { Stack, Divider, Box, InputAdornment, OutlinedInput, IconButton, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Scrollbar from '../../components/scrollbar';
import SvgColor from '../../components/svg-color';

import VoiceChatSpeakerItem from './VoiceChatSpeakerItem';
import VoiceChatListenerItem from './VoiceChatListenerItem';
// config
import { HEADER } from '../../config-global';

import MessageItem from './MessageItem';

import VoiceChatHeader from './VoiceChatHeader'
import  VerifyMessageModal from './VerifyMessageModal';
import VoiceChatFooter from './VoiceChatFooter';

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '0px 16px',
  borderRadius: '10px',
}));

export default function VoiceChat() {

  const [openVerifyModal, setOpenVerifyModal] = useState<HTMLButtonElement | null>(null);
  const verifyMessage = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenVerifyModal(event.currentTarget);
  }
  const handleCloseverifyMessage = () => {
    setOpenVerifyModal(null);
  };

  return (
    <>
      <VoiceChatHeader active={false}/>
      <Divider sx={{ mb: 3 }} />
      <Grid container columnSpacing={{ xl: 5, md:4, sm: 3, xs:3 }}>
        <Grid xl={8} md={8} spacing={3}>
          <Box sx={{
            backgroundColor:'rgba(0, 0, 0, 0.43)',
            maxHeight:'500px',
            borderRadius:'10px',
            
          }}>
            <Stack sx={{ height: `calc(100vh - ${HEADER.H_HOME_DESKTOP + 96 + 48}px)`}}>
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
                <Typography 
                  variant='subtitle1'
                  ml={3}
                  mt={5}
                  color='var(--Text-color, #565A7F)'
                >
                  Speakers(4)
                </Typography>
                <Grid container spacing={1}>
                  {Array.from(Array(4)).map((_, index) => (
                    <Grid key={index} xl={2.5} sx={{ position: 'relative' }}>
                      <VoiceChatSpeakerItem active/>
                    </Grid>
                  
                  ))}
                </Grid>
                <Typography 
                  variant='subtitle1'
                  ml={3}
                  color='var(--Text-color, #565A7F)'
                >
                  Speakers(14)
                </Typography>
                <Grid container spacing={1}>
                  {Array.from(Array(14)).map((_, index) => (
                    <Grid key={index} xl={1.7} >
                      <VoiceChatListenerItem active />
                    </Grid>
                  
                  ))}
                </Grid>
              </Scrollbar>
              <Divider sx={{ color: 'primary.contrastText', mb: 2 }} />
            </Stack>
          </Box>
        </Grid>
        <Grid xl={4} md={4}>
          <Box 
            sx={{
              height:'500px',
              borderRadius:'10px',
              backgroundColor:'rgba(0, 0, 0, 0.43)',
            }}
          >
            <Scrollbar
              sx={{
                height: 1,
                '& .simplebar-content': {
                  height: 1,
                },
                padding:3,
              }}
            >
              <MessageItem active/>
              <MessageItem active/>
              <MessageItem active/>
              <VerifyMessageModal 
                open = {openVerifyModal} 
                handleClose = {handleCloseverifyMessage} 
              />
              <Divider sx={{ color: 'primary.contrastText', mb: 2 }} />
              <StyledOutlinedInput
                sx={{
                  mb:2,
                }}
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
                    <IconButton onClick={verifyMessage}>
                      <SvgColor
                        src="/assets/images/svgs/send.png"
                        sx={{ width: 30, height: 30, color: 'primary.contrastText' }}
                      />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </Scrollbar>          
          </Box>
        </Grid>
      </Grid>
      <Divider sx={{ mt: 3 }} />
      <VoiceChatFooter/>
    </>
  );
}
