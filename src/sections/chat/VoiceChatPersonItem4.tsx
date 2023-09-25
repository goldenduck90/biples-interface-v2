import {Stack} from '@mui/material';
import Image from '../../components/image';
import { useAuthContext } from '../../auth/useAuthContext';

interface PersonItemProps {
  active: boolean;
}

const VoiceChatPersonItem = (props:PersonItemProps) => {
  const { active } = props;
  const { user } = useAuthContext();
  return (
    <Stack 
      sx={{
        backgroundColor:'rgba(0, 0, 0, 0.43)',
        maxHeight:'250px',
        maxWidth:'340px',
        paddingTop:'30px',
        paddingBottom:'30px',
        borderRadius:'10px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Image
        disabledEffect
        src="/assets/images/profile2.png"
        alt={user?.displayName}
        sx={{ width: 120, height: 120, }}
        style={{
          padding: '3.6px',
          borderRadius: '50%',
          background: active? '#4DE265':''
        }}
      />
    </Stack >
  );
};


export default VoiceChatPersonItem;
