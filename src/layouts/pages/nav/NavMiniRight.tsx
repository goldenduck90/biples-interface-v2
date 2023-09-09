// @mui
import { Stack, Box } from '@mui/material';
// config
import { NAV } from '../../../config-global';
// utils
import { hideScrollbarX } from '../../../utils/cssStyles';
// components
import LogoSingle from '../../../components/logo-single';
import { NavSectionMini } from '../../../components/nav-section';
//
import navConfig from './config-navigation';
import NavToggleButtonRight from './NavToggleButtonRight';

// ----------------------------------------------------------------------

export default function NavMiniRight() {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_RIGHT_NAV_MINI },
      }}
    >
      <NavToggleButtonRight
        sx={{
          top: 22,
          right: NAV.W_RIGHT_NAV_MINI - 12,
        }}
      />

      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: 'fixed',
          width: NAV.W_RIGHT_NAV_MINI,
          borderLeft: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScrollbarX,
        }}
      >
        <LogoSingle sx={{ mx: 'auto', my: 2 }} />

        <NavSectionMini data={navConfig} />
      </Stack>
    </Box>
  );
}
