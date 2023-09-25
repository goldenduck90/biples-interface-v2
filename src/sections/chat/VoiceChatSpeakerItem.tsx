import {Stack, Divider, Typography, Badge} from '@mui/material';
import Image from '../../components/image';
import { useAuthContext } from '../../auth/useAuthContext';




interface SpeakerItemProps {
  active: boolean;
}

const VoiceChatSpeakerItem = (props:SpeakerItemProps) => {

  const { active } = props;
  const handleSpeakerSelect =() => {
   console.log("ok!");
  }
  const { user } = useAuthContext();

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
        onClick={handleSpeakerSelect}
      >
        <Image
          disabledEffect
          src="/assets/images/profile2.png"
          alt={user?.displayName}
          sx={{ width: 103, height: 103}}
          style={{
            padding: '3.6px',
            borderRadius: '50%',
            background: active? '#4DE265':''
          }}
        />
      </Badge>
      <Typography 
        variant='body1'
        style={{
          background: 'var(--2, linear-gradient(86deg, #6AF6FF 5.01%, #E140E4 96.48%))',
          backgroundClip: 'text',
          WebkitBackgroundClip:'text',
          WebkitTextFillColor:'transparent'
        }}
      >
        {user?.displayName}
      </Typography>
      <Divider sx={{ color: 'primary.main' }} />
    </Stack>
  );
};

export default VoiceChatSpeakerItem;
