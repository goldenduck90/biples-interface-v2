import * as React from 'react';
import { Typography, Stack } from '@mui/material';
import SvgColor from '../../../../../components/svg-color';
import Image from '../../../../../components/image';
import { StyledItem, StyledButton } from './styles';
import SubscriptionMenu from './SubscriptionMenu';

const CommunityItem = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const subscriptionOpen = Boolean(anchorEl);
  const handleSubscriptionOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleSubscriptionClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledItem>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Image
          disabledEffect
          src="/assets/images/tron.svg"
          alt=""
          sx={{ borderRadius: 50, width: 30, height: 30 }}
        />
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          Tronwars
        </Typography>
        <SvgColor
          src="/assets/images/svgs/verified.svg"
          sx={{
            width: 12,
            height: 12,
          }}
        />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        px={3}
        py={1}
        spacing={1}
        sx={{ bgcolor: 'secondary.main', borderRadius: '10px' }}
      >
        <SvgColor
          src="/assets/images/svgs/users.svg"
          sx={{
            width: 12,
            height: 12,
          }}
        />
        <Typography variant="body2">140K members</Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        px={3}
        py={1}
        spacing={1}
        sx={{ bgcolor: 'secondary.main', borderRadius: '10px' }}
      >
        <Image
          disabledEffect
          src="/assets/images/svgs/users-online.svg"
          alt=""
          sx={{
            width: 12,
            height: 12,
          }}
        />
        <Typography variant="body2">1K online</Typography>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ bgcolor: 'secondary.main', borderRadius: '10px', width: 32, height: 32 }}
      >
        <Typography variant="body2">$</Typography>
      </Stack>
      <StyledButton
        variant="text"
        startIcon={
          <SvgColor
            src="/assets/images/svgs/join.svg"
            sx={{
              width: 15,
              height: 15,
            }}
          />
        }
        onClick={handleSubscriptionOpen}
      >
        Join
      </StyledButton>
      <SubscriptionMenu
        anchorEl={anchorEl}
        subscriptionOpen={subscriptionOpen}
        handleClose={handleSubscriptionClose}
      />
    </StyledItem>
  );
};

export default CommunityItem;
