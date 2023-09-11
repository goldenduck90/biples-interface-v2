import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Stack, Drawer } from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// config
import { NAV } from '../../../../config-global';
// components
import Logo from '../../../../components/logo';
import Scrollbar from '../../../../components/scrollbar';
//
import NavAccount from './NavAccount';
import NavNFT from './NavNFT';
import NFTSettings from './NFTSettings';
import ColorMode from './ColorMode';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavUserInfo({ openNav, onCloseNav }: Props) {
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
        pl: 4,
        pr: 1,
        pt: 6,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack mb={4} alignItems="center">
        <Logo sx={{ width: 'auto', height: 58 }} />
      </Stack>

      <Stack spacing={3} pb={6}>
        <NavAccount />
        <NavNFT />
        <NFTSettings />
        <ColorMode />
      </Stack>
    </Scrollbar>
  );

  return (
    <Stack
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.W_LEFT_NAV },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              zIndex: 0,
              width: NAV.W_LEFT_NAV,
              bgcolor: 'transparent',
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
    </Stack>
  );
}
