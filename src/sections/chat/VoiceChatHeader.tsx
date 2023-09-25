import {Stack, Box, Typography, Badge, Button} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';

import Image from '../../components/image';
// import { useAuthContext } from '../../auth/useAuthContext';
// import Button from 'src/theme/overrides/Button';


interface SpeakerItemProps {
  active: boolean;
}
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#E82B2B',
    color: '#E82B2B',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

const VoiceChatHeader = (props:SpeakerItemProps) => {

  const { active } = props;
  const handleSpeakerSelect =() => {
   console.log("ok!");
  }
  // const { user } = useAuthContext();

  return (
    <Stack>
      <Grid container columnSpacing={{ xl: 5, md:4, sm: 3, xs:3 }} >
        <Grid xl={1} md={3} sm={12} xs={12}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: active ? '#44b700' : '',
              },
            }}
            onClick={handleSpeakerSelect}
          >
            <Button 
                sx={{
                  padding:'10px',
                  backgroundColor:' var(--neutral-button, #151515)',
                }}  
              >
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  variant="dot"
                >
                <Typography
                  variant='body1'
                  paddingLeft='20px'
                >
                  Live
                </Typography>
              </StyledBadge>
            </Button>
          </Badge>  
        </Grid>
        <Grid xl={3} md={3} sm={12} xs={12} >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              disabledEffect
              src="/assets/images/svgs/mic.svg"
              alt='AMA Auguest #13'
              sx={{ width: 40, height: 40}}
              style={{
                padding: '3.6px',
                borderRadius: '50%',
              }}
            />
            <Typography
                variant='subtitle1'
            >
              AMA Auguest #13
            </Typography>
          </Box>
        </Grid>
        <Grid xl={8} md={5} sm={12} xs={12} sx={{ textAlign: 'end' }}>
          <Button 
            sx={{
              marginBottom:'15px',
              marginRight:'30px',
              backgroundColor: '#151515',
              color: '#FFF',
              height:45,
              width:'30px',
            }}
            // onClick={VerifyHandle}
          >
           <Image 
            disabledEffect
            src="/assets/images/svgs/redchat.svg"
            alt=""
            sx={{ width: 20, height: 'auto', color:'#E82B2B' }}
            />
          </Button>
          <Button 
            sx={{
              marginBottom:'15px',
              marginRight:'20px',
              backgroundColor: '#23AD39',
              color: '#FFF',
              height:45,
            }}
            // onClick={VerifyHandle}
          >
            <Typography
              variant='button'
              padding={2}
            >
              Start voice chat
            </Typography>
          </Button>
          <Button 
            sx={{
              marginBottom:'15px',
              backgroundColor: '#E82B2B',
              color: '#FFF',
              height:45,
            }}
            // onClick={VerifyHandle}
          >
            <Typography
              variant='button'
              padding={2}
            >
              Leave voice chat
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Stack>
  
  );
};

export default VoiceChatHeader;
