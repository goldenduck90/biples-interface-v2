import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Stack, Box, Drawer } from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// config
import { NAV } from '../../../../config-global';
// components
import Scrollbar from '../../../../components/scrollbar';
import Wallet from './Wallet';
import Sections from './Sections';
import NewsFeed from './NewsFeed';

// ----------------------------------------------------------------------

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};

export default function NavHome({ openNav, onCloseNav }: Props) {
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
        pr: 4,
        pl: 1,
        '& .simplebar-content': {
          height: 1,
          display: 'flex',
          flexDirection: 'column',
        },
      }}
    >
      <Stack py={6}>
        <Stack mb={4} alignItems="center">
          <Wallet />
        </Stack>

        <Stack spacing={2.5}>
          <Sections />
          <NewsFeed />
        </Stack>
      </Stack>
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
              border: 'none',
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
