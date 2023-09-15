import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Stack, Drawer, InputAdornment, OutlinedInput } from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
import SvgColor from '../../../../components/svg-color';
import Scrollbar from '../../../../components/scrollbar';
// config
import { NAV } from '../../../../config-global';
import PrivateMessages from './PrivateMessages';
import GroupMessages from './GroupMessages';
import Invites from './Invites';

type Props = {
  openNav: boolean;
  onCloseNav: VoidFunction;
};
export default function NavPrivateChat({ openNav, onCloseNav }: Props) {
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
        <Stack
          mb={4}
          sx={{
            height: '58px',
            bgcolor: 'primary.main',
            px: 2,
            py: 1,
            borderRadius: '10px',
          }}
        >
          <OutlinedInput
            id="search-input"
            defaultValue=""
            fullWidth
            placeholder="Search"
            startAdornment={
              <InputAdornment position="start">
                <SvgColor
                  src="/assets/images/svgs/search.svg"
                  sx={{ width: 12, height: 12, bgcolor: 'text.secondary' }}
                />
              </InputAdornment>
            }
            sx={{
              bgcolor: 'background.default',
              px: 2,
              height: 40,
              borderRadius: '10px',
            }}
          />
        </Stack>
        <Stack
          spacing={2}
          px={2}
          py={3}
          sx={{
            bgcolor: 'primary.main',
            borderRadius: '10px',
          }}
        >
          <GroupMessages />
          <PrivateMessages />
          <Invites />
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
