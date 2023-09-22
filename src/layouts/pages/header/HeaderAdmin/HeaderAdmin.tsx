import { useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  useScrollTrigger,
  Button,
  Stack,
  // Typography,
} from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// config
import { HEADER, NAV } from '../../../../config-global';
// routes
import { PATH_ADMIN } from '../../../../routes/paths';
// components
import Iconify from '../../../../components/iconify';
import Scrollbar from '../../../../components/scrollbar';
import SvgColor from '../../../../components/svg-color';
import { CustomAvatar } from '../../../../components/custom-avatar';
// ----------------------------------------------------------------------

type Props = {
  onOpenNavLeft?: VoidFunction;
  onOpenNavRight?: VoidFunction;
};

// interface CommunityProps {
//   name: string;
//   avatarUrl: string;
//   verified: boolean;
// }

interface HideOnScrollProps {
  children: React.ReactElement;
}

function HideOnScroll(props: HideOnScrollProps) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


const StyledAdminPanel = styled(Button)(({ theme }) => ({
  height: 58,
  minWidth: 180,
}));

export default function HeaderCommunity({ onOpenNavLeft, onOpenNavRight }: Props) {
  const [contextMenu, setContextMenu] = useState<{
    mouseX: number;
    mouseY: number;
  } | null>(null);
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : // repeated contextmenu when it is already open closes it with Chrome 84 on Ubuntu
          // Other native context menus might behave different.
          // With this behavior we prevent contextmenu from the backdrop to re-locale existing context menus.
          null
    );
  };


  const theme = useTheme();
 
  const { pathname, push } = useRouter();

  const isDesktop = useResponsive('up', 'lg');

  // const [openAddCommunityMenu, setOpenAddCommunityMenu] = useState<HTMLElement | null>(null);

  // const handleCloseAddCommunityMenu = () => {
  //   setOpenAddCommunityMenu(null);
  // };
 
  const handleClickAdmin1= () => {
    // push(PATH_ADMIN.overview);
  };
  const handleClickAdmin2 = () => {
    // push(PATH_ADMIN.roles);
  };

  const renderContent = (
    <>
      {/* {!isDesktop && (
        <IconButton onClick={onOpenNavLeft} sx={{ mr: 1, color: 'text.primary' }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )} */}
      <Scrollbar
        sx={{
          width: 1,
          pb: 2,
          '& .simplebar-content': {
            width: 1,
            display: 'flex',
            flexDirection: 'row',
          },
        }}
      >
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2.4}>
          <StyledAdminPanel
              variant="contained"
              onClick={handleClickAdmin1}
              onContextMenu={handleContextMenu}
              
              startIcon={
                <CustomAvatar
                  style={{
                    padding: '3.6px',
                    borderRadius: '50%',
                    background: 'white',
                  }}
                  src='/assets/images/tronwars.png'
                  // alt={item.avatarUrl}
                  name='BAYC'
                  color="default"
                  sx={{ width: 45, height: 45 }}
                />
              }
            >
              Tronwars
              <SvgColor
                  src="/assets/images/svgs/verified.svg"
                  sx={{
                    width: 12,
                    height: 12,
                    margin:1
                  }}
                />
              <SvgColor
                src="/assets/images/svgs/out.svg"
                sx={{ width: 12, 
                  height: 12,
                  marginLeft:3,
                  color: 'primary.contrastText'
                }}
              />
          </StyledAdminPanel>
        </Stack>
        <Stack  direction="row" justifyContent="center" alignItems="center" spacing={2.4} ml={2}>
          <StyledAdminPanel
              variant="contained"
              onClick={handleClickAdmin2}
              onContextMenu={handleContextMenu}
              startIcon={
                <CustomAvatar
                  style={{
                    padding: '3.6px',
                    borderRadius: '50%',
                    background: 'white',
                  }}
                  src='/assets/images/tronwars.png'
                  // alt={item.avatarUrl}
                  name='BAYC'
                  color="default"
                  sx={{ width: 45, height: 45 }}
                />
              }
            >
              Tronwars
              <SvgColor
                  src="/assets/images/svgs/verified.svg"
                  sx={{
                    width: 12,
                    height: 12,
                    margin:1,
                   
                  }}
                />
              <SvgColor
                src="/assets/images/svgs/out.svg"
                // alt={user?.displayName}
                sx={{ width: 12, height: 12,marginLeft:3, color: 'primary.contrastText' }}
              />
          </StyledAdminPanel>
        </Stack>
      </Scrollbar>
      {!isDesktop && (
        <IconButton onClick={onOpenNavRight} sx={{ ml: 1, color: 'text.primary' }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}
    </>
  );

  return (
    <HideOnScroll>
      <AppBar
        color="transparent"
        enableColorOnDark
        sx={{
          boxShadow: 'none',
          height: HEADER.H_MOBILE,
          zIndex: theme.zIndex.appBar + 1,
          transition: theme.transitions.create(['height'], {
            duration: theme.transitions.duration.shorter,
          }),
          ...(isDesktop && {
            width: `calc(100% - ${NAV.W_LEFT_NAV + NAV.W_RIGHT_NAV + 1}px)`,
            right: `${NAV.W_RIGHT_NAV + 1}px`,
            mt: 6,
            height: HEADER.H_HOME_DESKTOP,
          }),
        }}
      >
        <Toolbar sx={{ height: 1 }}>{renderContent}</Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
