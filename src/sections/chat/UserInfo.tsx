import { FC } from 'react';
import { styled } from '@mui/material/styles';
import {
  Stack,
  Link,
  Button,
  Divider,
  Typography,
  IconButton,
  Popover,
  Unstable_Grid2 as Grid,
} from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
import Image from '../../components/image';
import Iconify from '../../components/iconify';

interface UserInfoProps {
  open?: HTMLButtonElement | null;
  handleClose: () => void;
}
const AddFriendHandle = () => {
  console.log("Add Friend sucess ok~")
}
const BlockHandle = () => {
  console.log("Block ok~")
}
const AddFriendButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
  height: 20,
  width:  75,
  marginLeft:10,
}));
const BlockButton = styled(Button)(({ theme }) => ({
  background: '#232323',
  height: 20,
  width:  75,
  margin:6,
}));

const UserInfo: FC<UserInfoProps> = ({ open, handleClose }) => {
  const { user } = useAuthContext();

  return (
    <Popover
      open={Boolean(open)}
      anchorEl={open}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
    >
      <Stack sx={{ py: 2, px: 3, maxWidth: 287, position: 'relative' }}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ color: 'primary.contrastText', position: 'absolute', right: 3, top: 2 }}
        >
          <Iconify icon="eva:close-fill" />
        </IconButton>
        {/* <Typography variant="subtitle1" gutterBottom>
          Etiam feugiat lorem non metus
        </Typography> */}
        <Grid container spacing={1}>
          <Image
            disabledEffect
            src="/assets/images/profile.png"
            alt={user?.displayName}
            sx={{ width: 66, height: 66 }}
            style={{
              padding: '3.6px',
              borderRadius: '50%',
              background: 'linear-gradient(to right, #6AF6FF, #E140E4)',
            }}
          />
          <Grid>
            <Typography
              variant="subtitle2"
              mt={1.5}
              ml={1}
              sx={{
                backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 50%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                fontSize:12,
              }}
            >
              {user?.displayName} <span style={{ color: '#565A7F', fontSize:10, fontFamily:'Semi Bold' }}>—  Moderator</span>
            </Typography>
            <AddFriendButton 
              sx={{
                color: 'white',
                fontSize:10,
                fontFamily:'arial',
                textAlign:'center',
              }}
              onClick={AddFriendHandle}
            >
              {/* <StyledButton variant="contained" onClick={onButtonClick}> */}
              Add Friend
            </AddFriendButton>
            <BlockButton 
              sx={{
                color: 'white',
                fontSize:10,
                fontFamily:'arial',
                textAlign:'center',
              }}
              onClick={BlockHandle}
            >
              {/* <StyledButton variant="contained" onClick={onButtonClick}> */}
              Block
            </BlockButton>
          </Grid>
         
        </Grid>
      </Stack>
      <Stack sx={{ maxWidth: 287, position: 'relative' }}>
        <Divider sx={{ color: 'primary.main'}} />
      </Stack>
      <Stack sx={{ px: 3,py: 1, maxWidth: 287, position: 'relative' }}>
        <Typography 
          variant="body2" 
          sx={{ 
            color: 'text.primary',
            fontSize:20,
            textAlign:'center',
            padding:2,
            }}>
          Digital Collectibles
        </Typography>
        <Grid container spacing={0.5}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid key={index} xs={4} sx={{ position: 'relative' }}>
              <Image
                src={`/assets/images/${index + 1}.png`}
                alt=""
                sx={{
                  width: 76.8,
                  height: 78,
                  borderRadius: '10px',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Stack sx={{ maxWidth: 287, position: 'relative' }}>
        <Divider sx={{ color: 'primary.main',marginTop:2.5,}} />
      </Stack>
      <Stack direction="row" justifyContent="center" sx={{py: 2, maxWidth: 287, position: 'relative' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
          <Grid xs={4}>
            <Link href="#">
              <Image
                src="/assets/images/auth/twitter.svg"
                sx={{ width: 18.5, height: 'auto' }}
                style={{ cursor: 'pointer' }}
                alt="social-twitter"
              />
            </Link>
          </Grid>
          <Grid xs={4}>
            <Link href="#">
              <Image
                src="/assets/images/auth/instragram.png"
                sx={{ width: 18.5, height: 'auto'}}
                style={{ cursor: 'pointer' }}
                alt="social-instagram"
              />
            </Link>
          </Grid>
          <Grid xs={4}>
            <Link href="#">
              <Image
                src="/assets/images/svgs/opensea.svg"
                sx={{ width: 18.5, height: 'auto' }}
                style={{ cursor: 'pointer' }}
                alt="opensea"
              />
            </Link>
            
          </Grid>
        </Grid>
      </Stack>
    </Popover>
  );
};

export default UserInfo;
