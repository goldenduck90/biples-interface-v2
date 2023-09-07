import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Box, Drawer } from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { NAV } from '../../../config-global';
// components
// import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
// import { NavSectionVertical } from '../../../components/nav-section';
import Wallet from './Wallet';
import Sections from './Sections';
import NewsFeed from './NewsFeed';
import NavToggleButtonRight from './NavToggleButtonRight';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVerticalRight({ openNav, onCloseNav }: Props) {
  const { pathname } = useRouter();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        px: 4,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Box sx={{ mt: 5 }}>
        <Wallet />
      </Box>
      <Box sx={{ mt: 5 }}>
        <Sections />
      </Box>
      <Box sx={{ mt: 2.5, pb: 5 }}>
        <NewsFeed />
      </Box>
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_RIGHT_NAV },
      }}
    >
      <NavToggleButtonRight />

      {isDesktop ? (
        <Drawer
          anchor="right"
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_RIGHT_NAV,
              bgcolor: 'transparent',
              borderLeftStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          anchor="right"
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_RIGHT_NAV,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
