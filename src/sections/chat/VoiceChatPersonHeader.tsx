import {Stack, Box, Typography } from '@mui/material';


import Image from '../../components/image';
import { useAuthContext } from '../../auth/useAuthContext';
// import Button from 'src/theme/overrides/Button';

interface PersonItemProps {
  count: boolean;
}

const VoiceChatPersonHeader = (props:PersonItemProps) => {
  const {count} = props;
  const person2 = (
    <Typography
      variant='subtitle1'
    >
      Userbiples22, Userbiples1
    </Typography>
  )
  const person4 = (
    <Typography
      variant='subtitle1'
    >
      Userbiples22, Userbiples1, Alex Designer, Caligula
    </Typography>
  )
  return (
    <Stack mb={2}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image
          disabledEffect
          src="/assets/images/svgs/subst.svg"
          alt='AMA Auguest #13'
          sx={{ width: 25, height: 25}}
          style={{
            padding: '3.6px',
            borderRadius: '50%',
          }}
        />
          {count ? person2 : person4}
      </Box>
    </Stack>
  );
};

export default VoiceChatPersonHeader;
