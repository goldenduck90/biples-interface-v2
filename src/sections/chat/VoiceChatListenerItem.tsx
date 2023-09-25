import {Stack, Divider, Typography, Badge} from '@mui/material';
import Image from '../../components/image';
import { useAuthContext } from '../../auth/useAuthContext';


interface ListenerItemProps {
  active: boolean;
}

const VoiceChatListenerItem = (props:ListenerItemProps) => {
  const { active } = props;
  const { user } = useAuthContext();
  const handleListenerSelect = () => {
    console.log("ok~")
  }
  
  return (
    <Stack alignItems="center" spacing={1} m={1} >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        sx={{
          '& .MuiBadge-badge': {
            backgroundColor: active ? '#44b700' : '',
          },
        }}
        onClick={handleListenerSelect}
      >
        <Image
          disabledEffect
          src="/assets/images/profile2.png"
          alt={user?.displayName}
          sx={{ width: 57, height: 57}}
          style={{
            padding: '3.6px',
            borderRadius: '50%',
            background: active? 'var(--2, linear-gradient(86deg, #6AF6FF 5.01%, #E140E4 96.48%))':''
          }}
        />
      </Badge>
      <Typography 
        variant='overline'
      >
        {user?.displayName}
      </Typography>
      <Divider sx={{ color: 'primary.main' }} />
    </Stack>
  );
};

export default VoiceChatListenerItem;
