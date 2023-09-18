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
  MenuItem,
  Stack,
  Divider,
  Typography,
} from '@mui/material';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// config
import { HEADER, NAV } from '../../../../config-global';
// routes
import { PATH_PAGE } from '../../../../routes/paths';
// components
import Iconify from '../../../../components/iconify';
import Scrollbar from '../../../../components/scrollbar';
import SvgColor from '../../../../components/svg-color';
import Image from '../../../../components/image';
import MenuPopover from '../../../../components/menu-popover';
import { CustomAvatar } from '../../../../components/custom-avatar';
//
import { COMMUNITIES } from '../../../../constants/communities';
import CreateCommunityModal from './CreateCommunityModal';
import JoinCommunityModal from './JoinCommunityModal';
import RightContextMenu from './RightContextMenu';

// ----------------------------------------------------------------------

type Props = {
  onOpenNavLeft?: VoidFunction;
  onOpenNavRight?: VoidFunction;
};

interface CommunityProps {
  name: string;
  avatarUrl: string;
  verified: boolean;
}

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

const StyledAddCommunityButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
  height: 58,
  minWidth: 260,
}));

const StyledCommunityButton = styled(Button)(({ theme }) => ({
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

  const handleCloseMenu = () => {
    setContextMenu(null);
  };

  const theme = useTheme();
  const { pathname, push } = useRouter();

  const isDesktop = useResponsive('up', 'lg');

  const [openAddCommunityMenu, setOpenAddCommunityMenu] = useState<HTMLElement | null>(null);
  const [openCreateCommunity, setOpenCreateCommunity] = useState(false);
  const [openJoinCommunity, setOpenJoinCommunity] = useState(false);

  const handleOpenAddCommunityMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenAddCommunityMenu(event.currentTarget);
  };

  const handleCloseAddCommunityMenu = () => {
    setOpenAddCommunityMenu(null);
  };

  const handleOpenCreateCommunity = () => {
    handleCloseAddCommunityMenu();
    setOpenCreateCommunity(true);
  };

  const handleCloseCreateCommunity = () => {
    setOpenCreateCommunity(false);
  };

  const handleOpenJoinCommunity = () => {
    handleCloseAddCommunityMenu();
    setOpenJoinCommunity(true);
  };

  const handleCloseJoinCommunity = () => {
    setOpenJoinCommunity(false);
  };

  const handleClickCommunity = () => {
    push(PATH_PAGE.community.root);
  };

  const renderContent = (
    <>
      {!isDesktop && (
        <IconButton onClick={onOpenNavLeft} sx={{ mr: 1, color: 'text.primary' }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}
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
          {pathname === PATH_PAGE.home ? (
            <StyledAddCommunityButton
              variant="contained"
              startIcon={
                <SvgColor src="/assets/images/svgs/plus.svg" sx={{ width: 17, height: 17 }} />
              }
              onClick={handleOpenAddCommunityMenu}
            >
              Add Community
            </StyledAddCommunityButton>
          ) : (
            <IconButton onClick={handleOpenAddCommunityMenu} sx={{ width: 60, height: 60 }}>
              <SvgColor src="/assets/images/svgs/plus.svg" sx={{ width: 17, height: 17 }} />
            </IconButton>
          )}

          {COMMUNITIES.map((item: CommunityProps) => (
            <StyledCommunityButton
              key={item.name}
              variant="contained"
              onClick={handleClickCommunity}
              onContextMenu={handleContextMenu}
              startIcon={
                <CustomAvatar
                  src={item.avatarUrl}
                  alt={item.avatarUrl}
                  name={item.name}
                  color="default"
                  sx={{ width: 45, height: 45 }}
                />
              }
              endIcon={
                item.verified && (
                  <SvgColor
                    src="/assets/images/svgs/verified.svg"
                    sx={{
                      width: 12,
                      height: 12,
                    }}
                  />
                )
              }
            >
              {item.name}
            </StyledCommunityButton>
          ))}
        </Stack>
      </Scrollbar>
      <MenuPopover
        disabledArrow
        open={openAddCommunityMenu}
        onClose={handleCloseAddCommunityMenu}
        PaperProps={{
          style: {
            background: 'secondary.main',
            backdropFilter: 'blur(5px)',
            padding: '8px',
          },
        }}
      >
        <MenuItem onClick={handleOpenCreateCommunity}>
          <Stack direction="row" alignItems="center">
            <SvgColor
              src="/assets/images/svgs/plus.svg"
              sx={{
                width: 10,
                height: 10,
                mr: 1,
              }}
            />
            <Typography variant="body1">Create a Community</Typography>
          </Stack>
        </MenuItem>
        <Divider sx={{ color: 'primary.main' }} />
        <MenuItem onClick={handleOpenJoinCommunity}>
          <Stack direction="row" alignItems="center">
            <Image
              src="/assets/images/svgs/enter.svg"
              sx={{
                width: 10,
                height: 10,
                mr: 1,
              }}
            />
            <Typography
              variant="body1"
              sx={{
                backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Join a Community
            </Typography>
          </Stack>
        </MenuItem>
      </MenuPopover>
      <CreateCommunityModal open={openCreateCommunity} handleClose={handleCloseCreateCommunity} />
      <JoinCommunityModal open={openJoinCommunity} handleClose={handleCloseJoinCommunity} />
      <RightContextMenu contextMenu={contextMenu} handleCloseMenu={handleCloseMenu} />
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
