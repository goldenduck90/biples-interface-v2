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
import NavToggleButton from './NavToggleButton';

// ----------------------------------------------------------------------

export default function NavMini() {
  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_RIGHT_NAV_MINI },
      }}
    >
      <NavToggleButton
        sx={{
          top: 22,
          left: NAV.W_RIGHT_NAV_MINI - 12,
        }}
      />

      <Stack
        sx={{
          pb: 2,
          height: 1,
          position: 'fixed',
          width: NAV.W_RIGHT_NAV_MINI,
          borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          ...hideScrollbarX,
        }}
      >
        <LogoSingle sx={{ mx: 'auto-single', my: 2 }} />

        <NavSectionMini data={navConfig} />
      </Stack>
    </Box>
  );
}
