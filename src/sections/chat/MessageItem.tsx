import { useState } from 'react';
import { Box, Typography, Badge, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import UserInfo from './UserInfo';
import Image from '../../components/image';

interface MessageItemProps {
  active: boolean;
}

const MessageItem = (props: MessageItemProps) => {
  const { active } = props;
  const theme = useTheme();
  const [openUserInfo, setOpenUserInfo] = useState<HTMLButtonElement | null>(null);

  const handleOpenUserInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpenUserInfo(event.currentTarget);
  };

  const handleCloseUserInfo = () => {
    setOpenUserInfo(null);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', pb: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            variant="dot"
            sx={{
              '& .MuiBadge-badge': {
                backgroundColor: active ? '#44b700' : '#565A7F',
                boxShadow: `0 0 0 2px ${theme.palette.primary.contrastText}`,
              },
            }}
            onClick={handleOpenUserInfo}
          >
            <Avatar alt="User" src="/assets/images/5.png" sx={{ width: 40, height: 40 }} />
          </Badge>

          <UserInfo open={openUserInfo} handleClose={handleCloseUserInfo} />

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              pl: 1,
            }}
          >
            <Typography
              color="primary.contrastText"
              fontSize={15}
              fontWeight={500}
              sx={{
                backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Dave Bronx
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Image
            disabledEffect
            src="/assets/icons/double-check.svg"
            alt=""
            sx={{ width: 'auto', height: 10 }}
          />
          <Typography fontSize="10px" color="#697A8D" ml={1}>
            14:40
          </Typography>
        </Box>
      </Box>
      <Box sx={{ ml: 6 }}>
        <Typography color="primary.contrastText" fontSize={15}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec diam id vel euismod. Semper
          libero mi tincidunt sed lectus faucibus vestibulum morbi. Massa velit tortor iaculis odio
          sed sodales arcu maecenas. Vitae hac tempor velit pulvinar aliquet est.
        </Typography>
      </Box>
    </Box>
  );
};

export default MessageItem;
