import * as React from 'react';
import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Button, Typography, IconButton, Stack, Popover} from '@mui/material';

import ReactCodeInput from 'react-code-input';
import Iconify from '../../components/iconify';
// import { useAuthContext } from '../../auth/useAuthContext';
import Image from '../../components/image';

interface VerifyMessageModalProps {
  open?: HTMLButtonElement | null;
  handleClose: () => void;
}

const VerifyButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
  height: 54,
  width:  227,
  marginLeft:10,
}));

const VerifyMessageModal: FC<VerifyMessageModalProps> = ({ open, handleClose }) => {
  const VerifyHandle = () => {
    console.log("Send sucess ok~")
  }
  return (
      <Popover 
        open={Boolean(open)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        // anchorEl={open}
      >
        <Stack sx={{ 
          py: 8, 
          px: 3, 
          width: '680px', 
          height: '510px', 
          border: '1px solid',
          borderColor:'#252525',
          borderRadius: '15px', 
          position: 'relative', 
          alignItems: 'center',
          }}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: 'primary.contrastText',
            }}
          >
            <Iconify icon="eva:close-fill" />
          </IconButton>
          <Image
            src="/assets/images/svgs/warning.png"
            sx={{ width: '40px', height: '40px', marginBottom:'20px' }}
            style={{ cursor: 'pointer' }}
            alt="opensea"
          />
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.primary',
              fontSize:22,
              padding:2,
              }}
          >
            Your announcements contains an external link 🤔
          </Typography>
          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.primary',
              fontSize:18,
              paddingTop:2,
              }}
          >
            To validate the online publication of your announcements,
          </Typography>
          <Typography 
            variant="body2" 
            sx={{
              backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 50%, #E140E4 86%)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
              margin:1,
              marginBottom:3,
              fontSize:18,
            }}
          >
            please enter the code 2FA <span style={{ color: 'text.primary', fontSize:18 }}>received by the community creator.</span>
          </Typography>
          <ReactCodeInput
            type="text"
            fields={6}
            name="Enable 2FA"
            inputMode="numeric"
            inputStyle={{
              color:'white',
              textAlign:'center',
              margin: '8px',
              width: '56px',
              height: '56px',
              borderRadius: '5px',
              fontSize: '20px',
              backgroundColor: '#151515',
              border: '1px solid',
              borderColor:'#686868',
              marginBottom:'50px',
            }}
          />
          <VerifyButton 
            sx={{
              color: 'white',
              fontSize:20,
              fontFamily:'arial',
            
            }}
            onClick={VerifyHandle}
          >
            Send
          </VerifyButton>
        </Stack>
      </Popover>
  );
};

export default VerifyMessageModal;
