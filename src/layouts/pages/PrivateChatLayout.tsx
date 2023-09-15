import { useState } from 'react';
// @mui
import { Box } from '@mui/material';
// auth
import AuthGuard from '../../auth/AuthGuard';
//
import Main from './Main';
import { HeaderPrivateChat } from './header';
import { NavUserInfo, NavPrivateChat } from './nav';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode;
};

export default function PrivateChatLayout({ children }: Props) {
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
  const renderNavPrivateChat = <NavPrivateChat openNav={openRight} onCloseNav={handleCloseRight} />;

  const renderContent = () => (
    <>
      <HeaderPrivateChat onOpenLeftNav={handleOpenLeft} onOpenRightNav={handleOpenRight} />

      <Box
        sx={{
          display: { lg: 'flex' },
          minHeight: { lg: 1 },
        }}
      >
        {renderNavUserInfo}

        <Main>{children}</Main>

        {renderNavPrivateChat}
      </Box>
    </>
  );

  return <AuthGuard> {renderContent()} </AuthGuard>;
}
