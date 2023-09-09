// @mui
import { useTheme } from '@mui/material/styles';
import { IconButton, IconButtonProps } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// config
import { NAV } from '../../../config-global';
// components
import Iconify from '../../../components/iconify';
import { useSettingsContext } from '../../../components/settings';

// ----------------------------------------------------------------------

export default function NavToggleButtonRight({ sx, ...other }: IconButtonProps) {
  const theme = useTheme();

  const { themeLayout, onToggleLayout } = useSettingsContext();

  const isDesktop = useResponsive('up', 'lg');

  if (!isDesktop) {
    return null;
  }

  return (
    <IconButton
      size="small"
      onClick={onToggleLayout}
      sx={{
        p: 0.5,
        top: 32,
        position: 'fixed',
        right: NAV.W_RIGHT_NAV - 12,
        zIndex: theme.zIndex.appBar + 1,
        border: `dashed 1px ${theme.palette.divider}`,
        ...bgBlur({ opacity: 0.48, color: theme.palette.background.default }),
        '&:hover': {
          bgcolor: 'background.default',
        },
        ...sx,
      }}
      {...other}
    >
      <Iconify
        width={16}
        icon={themeLayout === 'vertical' ? 'eva:arrow-ios-forward-fill' : 'eva:arrow-ios-back-fill'}
      />
    </IconButton>
  );
}
