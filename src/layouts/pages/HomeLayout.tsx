import { useState } from 'react';
// @mui
import { Box } from '@mui/material';
// auth
import AuthGuard from '../../auth/AuthGuard';
//
import Main from './Main';
import { HeaderCommunity, HeaderPrivateChat } from './header';
import { NavUserInfo, NavHome, NavPrivateChat, NavCommunity } from './nav';

// ----------------------------------------------------------------------

type Props = {
  children?: React.ReactNode,
  displayLayout: string;
};

export default function HomeLayout( props:Props) {
  const [openLeft, setOpenLeft] = useState(false);
  const [openRight, setOpenRight] = useState(false);

  const {displayLayout,children} = props;

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
  const renderNavPrivateChat = <NavPrivateChat openNav={openRight} onCloseNav={handleCloseRight} />;
  const renderNavCommunity = <NavCommunity openNav={openRight} onCloseNav={handleCloseRight} />;

  let renderContent;
  if (displayLayout === 'private') {
    renderContent = (
      <>
        <HeaderPrivateChat onOpenNavLeft={handleOpenLeft} onOpenNavRight={handleOpenRight} />

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
  } else if (displayLayout === 'home') {
    renderContent = (
      <>
        <HeaderCommunity onOpenNavLeft={handleOpenLeft} onOpenNavRight={handleOpenRight} />

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
  } else if (displayLayout === 'community') {
    renderContent = (
      <>
        <HeaderCommunity onOpenNavLeft={handleOpenLeft} onOpenNavRight={handleOpenRight} />

        <Box
          sx={{
            display: { lg: 'flex' },
            minHeight: { lg: 1 },
          }}
        >
          {renderNavUserInfo}

          <Main>{children}</Main>
          {renderNavCommunity}
        </Box>
      </>
    );
  }
    
  return (<AuthGuard> {renderContent} </AuthGuard>);
}
