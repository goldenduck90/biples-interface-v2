import {IconButton, Stack, Typography, Link, Divider, Grid} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import { useTheme } from '@mui/material/styles';
// import UserInfo from './UserInfo';
import Image from '../../components/image';
import SvgColor from '../../components/svg-color';
import { useAuthContext } from '../../auth/useAuthContext';
// import { StyledRoot } from './styles';
// import { createEntityAdapter } from '@reduxjs/toolkit';


const TeamItem = () => {

  const { user } = useAuthContext();
  return (
    <Card 
      sx={{ 
        p:0,
        maxWidth:360, 
        maxHeight:340,
        backgroundColor:'#151515',
        alignItems:'center'
      }}>
      <Stack alignItems="center" spacing={1} m={1} >
        <Image
          disabledEffect
          src="/assets/images/profile2.png"
          alt={user?.displayName}
          sx={{ width: 170, height: 170}}
          style={{
            padding: '3.6px',
            borderRadius: '50%',
            background: 'linear-gradient(to right, #6AF6FF, #E140E4)',
          }}
        />
        <Divider sx={{ color: 'primary.main' }} />
      </Stack>
      <CardContent 
        sx={{ 
          p:0,
          pt:1,
          maxWidth:360, 
          maxHeight:100,
          borderRadius:'18px',
          border: '1px solid',
          borderColor:'primary.main',
          backgroundColor:'#050505'
        }} >
        <Typography
          variant="body1"
          color="text.perimary"
          textAlign="center"
        >
          {user?.displayName}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          m={1}
        >
          {/* {user?.displayName} */}Founder
        </Typography>
      
        <Divider sx={{ color: 'primary.main' }} />
        <Grid 
          sx={{
            textAlign:'center',
            }}
          >
          <Link href='#'>
            <IconButton>
              <SvgColor src="/assets/images/svgs/twitter.svg"
                sx={{
                  width: 16,
                  height: 18,
                  color: 'primary.contrastText',
                }}
              />
            </IconButton>
          </Link>
          <Link href='#'>
            <IconButton>
              <SvgColor src="/assets/images/svgs/instagram.png"
                sx={{
                  width: 16,
                  height: 18,
                  mb:0.5,
                  color: 'primary.contrastText',
                }}
              />
            </IconButton>
          </Link>
          <Link href='#'>
            <IconButton>
              <SvgColor src="/assets/images/svgs/message.png"
                sx={{
                  width: 14,
                  height: 18,
                  color: 'primary.contrastText',
                }}
              />
            </IconButton>
          </Link>
        </Grid>
      </CardContent>  
    </Card>
  );
};

export default TeamItem;
