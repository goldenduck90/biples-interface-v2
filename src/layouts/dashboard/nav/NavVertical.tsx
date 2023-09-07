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
import Logo from '../../../components/logo';
import Scrollbar from '../../../components/scrollbar';
// import { NavSectionVertical } from '../../../components/nav-section';
//
// import navConfig from './config-navigation';
// import NavDocs from './NavDocs';
import NavAccount from './NavAccount';
import NFTGallery from './NFTGallery';
import NFTSettings from './NFTSettings';
import ColorMode from './ColorMode';
// import NavToggleButton from './NavToggleButton';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavVertical({ openNav, onCloseNav }: Props) {
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
      <Box
        sx={{
          mt: 5,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Logo sx={{ width: 160, height: 52 }} />
      </Box>
      {/* <NavSectionVertical data={navConfig} /> */}
      <Box sx={{ mt: 5 }}>
        <NavAccount />
      </Box>
      <Box sx={{ mt: 2.5 }}>
        <NFTGallery />
      </Box>

      <Box sx={{ mt: 2.5 }}>
        <NFTSettings />
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ mt: 2.5, pb: 5 }}>
        <ColorMode />
      </Box>

      {/* <NavDocs /> */}
    </Scrollbar>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_LEFT_NAV },
      }}
    >
      {/* <NavToggleButton /> */}

      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_LEFT_NAV,
              bgcolor: 'transparent',
              // borderRightStyle: 'dashed',
              border: 'none',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: NAV.W_LEFT_NAV,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
