import { FC } from 'react';
import { Typography, Divider, Menu, Stack } from '@mui/material';
import SvgColor from '../../../../../../components/svg-color';
import { StyledIconButton } from './styles';

interface SubscriptionMenuProps {
  anchorEl: null | HTMLElement;
  subscriptionOpen: boolean;
  handleClose: () => void;
}
const SubscriptionMenu: FC<SubscriptionMenuProps> = ({
  anchorEl,
  subscriptionOpen,
  handleClose,
}) => (
  <Menu
    id="community-menu"
    anchorEl={anchorEl}
    open={subscriptionOpen}
    onClose={handleClose}
    MenuListProps={{
      'aria-labelledby': 'basic-button',
    }}
    PaperProps={{
      sx: {
        textAlign: 'center',
        background: 'rgba(21, 21, 21, 0.85)',
        backdropFilter: 'blur(3px)',
        px: 3,
        py: 2,
      },
    }}
  >
    <Typography variant="body1" fontWeight={600}>
      This community requires a subscription
    </Typography>
    <Divider sx={{ my: 2 }} />
    <Typography variant="h4">99.99$</Typography>
    <Typography variant="body1" fontWeight={500}>
      monthly subscription
    </Typography>
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} py={1}>
      <SvgColor
        src="/assets/images/svgs/about.svg"
        sx={{
          width: '12px',
          height: '12px',
          color: '#565A7F',
        }}
      />
      <Typography variant="caption" fontWeight={500} color="#565A7F">
        Biples charges 5% fee on these payments
      </Typography>
    </Stack>
    <Divider sx={{ my: 2 }} />
    <Typography variant="caption" fontWeight={500} color="#565A7F">
      Choose your payment method
    </Typography>
    <Stack direction="row" alignItems="center" justifyContent="center" spacing={1} mt={1}>
      <StyledIconButton>
        <SvgColor
          src="/assets/images/svgs/binance.svg"
          sx={{
            width: 24,
            height: 24,
            color: 'primary.contrastText',
          }}
        />
      </StyledIconButton>
      <StyledIconButton>
        <SvgColor
          src="/assets/images/svgs/etherum.svg"
          sx={{
            width: 24,
            height: 24,
            color: 'primary.contrastText',
          }}
        />
      </StyledIconButton>
      <StyledIconButton>
        <SvgColor
          src="/assets/images/svgs/tether.svg"
          sx={{
            width: 24,
            height: 24,
            color: 'primary.contrastText',
          }}
        />
      </StyledIconButton>
      <StyledIconButton>
        <SvgColor
          src="/assets/images/svgs/card.svg"
          sx={{
            width: 24,
            height: 24,
            color: 'primary.contrastText',
          }}
        />
      </StyledIconButton>
    </Stack>
  </Menu>
);

export default SubscriptionMenu;
