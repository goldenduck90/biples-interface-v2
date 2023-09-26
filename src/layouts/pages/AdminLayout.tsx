import { useState } from 'react';
// @mui
import { Box } from '@mui/material';
// auth
import AuthGuard from '../../auth/AuthGuard';
//
import Main from './Main';
import { HeaderAdmin } from './header';
import { NavCommunity, NavAdmin } from './nav';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function AdminLayout({ children }: Props) {
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

  const renderNavAdmin = <NavAdmin openNav={openLeft} onCloseNav={handleCloseLeft} />;
  // const renderNavUserInfo = <NavUserInfo openNav={openLeft} onCloseNav={handleCloseLeft} />;
  const renderNavCommunity = <NavCommunity openNav={openRight} onCloseNav={handleCloseRight} />;

  const renderContent = () => (
    <>
      <HeaderAdmin onOpenNavLeft={handleOpenLeft} onOpenNavRight={handleOpenRight} />

      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        {/* {renderNavUserInfo} */}
        {renderNavAdmin}
        <Main>{children}</Main>

        {renderNavCommunity}
      </Box>
    </>
  );

  return <AuthGuard> {renderContent()} </AuthGuard>;
}
