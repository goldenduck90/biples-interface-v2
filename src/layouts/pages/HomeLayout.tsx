import { useState } from 'react';
// @mui
import { Box } from '@mui/material';
// auth
import AuthGuard from '../../auth/AuthGuard';
//
import Main from './Main';
import { HomeHeader } from './header';
import NavUserInfo from './nav/NavUserInfo';
import NavHome from './nav/NavHome';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function HomeLayout({ children }: Props) {
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const handleOpenLeft = () => {
    setOpenLeft(true);
  };

  const handleCloseLeft = () => {
    setOpenLeft(false);
  };

  const handleOpenRight = () => {
    setOpenRight(true);
  };

  const handleCloseRight = () => {
    setOpenRight(false);
  };

  const renderNavUserInfo = <NavUserInfo openNav={openLeft} onCloseNav={handleCloseLeft} />;
  const renderNavHome = <NavHome openNav={openRight} onCloseNav={handleCloseRight} />;

  const renderContent = () => (
    <>
      <HomeHeader onOpenNavLeft={handleOpenLeft} onOpenNavRight={handleOpenRight} />

      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        {renderNavUserInfo}

        <Main>{children}</Main>

        {renderNavHome}
      </Box>
    </>
  );

  return <AuthGuard> {renderContent()} </AuthGuard>;
}
