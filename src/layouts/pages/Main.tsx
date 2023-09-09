// @mui
import { Box, BoxProps } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// config
import { HEADER, NAV } from '../../config-global';
// components
import { useSettingsContext } from '../../components/settings';

// ----------------------------------------------------------------------

const SPACING = 48;

export default function Main({ children, sx, ...other }: BoxProps) {
  const { themeLayout } = useSettingsContext();

  const isNavMini = themeLayout === 'mini';

  const isDesktop = useResponsive('up', 'lg');

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        pt: `${HEADER.H_MOBILE + SPACING}px`,
        ...(isDesktop && {
          pt: `${HEADER.H_HOME_DESKTOP + SPACING}px`,
          width: `calc(100% - ${NAV.W_LEFT_NAV + NAV.W_RIGHT_NAV}px)`,
          ...(isNavMini && {
            width: `calc(100% - ${NAV.W_LEFT_NAV + NAV.W_RIGHT_NAV_MINI}px)`,
          }),
        }),
        ...sx,
      }}
      {...other}
    >
      {children}
    </Box>
  );
}
