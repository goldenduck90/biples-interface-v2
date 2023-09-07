import { useState } from 'react';
// @mui
import { Box } from '@mui/material';
// hooks
import useResponsive from '../../hooks/useResponsive';
// auth
import AuthGuard from '../../auth/AuthGuard';
// components
import { useSettingsContext } from '../../components/settings';
//
import Main from './Main';
import { PrivateChatHeader } from './header';
import NavMiniRight from './nav/NavMiniRight';
import NavVertical from './nav/NavVertical';
import PrivateChatRightNav from './nav/PrivateChatRightNav';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  const { themeLayout } = useSettingsContext();

  const isDesktop = useResponsive('up', 'lg');

  const [open, setOpen] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const isNavMini = themeLayout === 'mini';

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenRight = () => {
    setOpenRight(true);
  };

  const handleCloseRight = () => {
    setOpenRight(false);
  };

  const renderNavVertical = <NavVertical openNav={open} onCloseNav={handleClose} />;
  const renderNavVerticalRight = (
    <PrivateChatRightNav open={openRight} onClose={handleCloseRight} />
  );

  const renderContent = () => {
    if (isNavMini) {
      return (
        <>
          <PrivateChatHeader onOpenLeftNav={handleOpen} onOpenRightNav={handleOpenRight} />

          <Box
            sx={{
              display: { lg: 'flex' },
              minHeight: { lg: 1 },
            }}
          >
            {renderNavVertical}

            <Main>{children}</Main>

            {isDesktop ? <NavMiniRight /> : renderNavVerticalRight}
          </Box>
        </>
      );
    }

    return (
      <>
        <PrivateChatHeader onOpenLeftNav={handleOpen} onOpenRightNav={handleOpenRight} />

        <Box
          sx={{
            display: { lg: 'flex' },
            minHeight: { lg: 1 },
          }}
        >
          {renderNavVertical}

          <Main>{children}</Main>

          {renderNavVerticalRight}
        </Box>
      </>
    );
  };

  return <AuthGuard> {renderContent()} </AuthGuard>;
}
