import { useState } from 'react';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  useScrollTrigger,
  Button,
  Box,
  Menu,
  MenuItem,
  Avatar,
} from '@mui/material';
// utils
import { bgBlur } from '../../../utils/cssStyles';
// hooks
// import useOffSetTop from '../../../hooks/useOffSetTop';
import useResponsive from '../../../hooks/useResponsive';
// config
import { HEADER, NAV } from '../../../config-global';
// components
import Iconify from '../../../components/iconify';
import { useSettingsContext } from '../../../components/settings';
import Scrollbar from '../../../components/scrollbar';
import SvgColor from '../../../components/svg-color';
import Image from '../../../components/image';

//
// import Searchbar from './Searchbar';
// import AccountPopover from './AccountPopover';
// import LanguagePopover from './LanguagePopover';
// import ContactsPopover from './ContactsPopover';
// import NotificationsPopover from './NotificationsPopover';

import { COMMUNITIES } from '../../../constants/communities';
import CreateCommunityModal from './CreateCommunityModal';
import JoinCommunityModal from './JoinCommunityModal';
// ----------------------------------------------------------------------

type Props = {
  onOpenNav?: VoidFunction;
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
  background:
    theme.palette.mode === 'dark'
      ? 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)'
      : theme.palette.primary.main,
  height: 58,
  minWidth: 260,
  paddingLeft: 44,
  paddingRight: 44,
}));

const StyledCommunityButton = styled(Button)(({ theme }) => ({
  height: 58,
  minWidth: 180,
  paddingLeft: 16,
  marginLeft: theme.spacing(2),
  textAlign: 'start',
}));

export default function Header({ onOpenNav, onOpenNavRight }: Props) {
  const theme = useTheme();

  const { themeLayout } = useSettingsContext();

  const isNavMini = themeLayout === 'mini';

  const isDesktop = useResponsive('up', 'lg');

  // const isOffset = useOffSetTop(HEADER.H_DASHBOARD_DESKTOP);

  const [anchorElCommunity, setAnchorElCommunity] = useState<null | HTMLElement>(null);

  const openAddCommunityMenu = Boolean(anchorElCommunity);
  const addCommunityClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorElCommunity(event.currentTarget);
  };
  const handleAddCommunityClose = () => {
    setAnchorElCommunity(null);
  };

  const [openCreateCommunity, setCreateCommunityOpen] = useState(false);
  const [openJoinCommunity, setJoinCommunityOpen] = useState(false);

  const handleClickCommunityOpen = () => {
    handleAddCommunityClose();
    setCreateCommunityOpen(true);
  };
  const handleCreateCommunityClose = () => {
    setCreateCommunityOpen(false);
  };
  const handleClickJoinCommunityOpen = () => {
    handleAddCommunityClose();
    setJoinCommunityOpen(true);
  };
  const handleJoinCommunityClose = () => {
    setJoinCommunityOpen(false);
  };

  const renderContent = (
    <>
      {!isDesktop && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1, color: 'text.primary' }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      {/* <Searchbar />

      <Stack
        flexGrow={1}
        direction="row"
        alignItems="center"
        justifyContent="flex-end"
        spacing={{ xs: 0.5, sm: 1.5 }}
      >
        <LanguagePopover />

        <NotificationsPopover />

        <ContactsPopover />

        <AccountPopover />
      </Stack> */}
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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            whiteSpace: 'nowrap',
          }}
        >
          <StyledAddCommunityButton
            variant="contained"
            startIcon={
              <SvgColor
                src="/assets/images/svgs/plus.svg"
                sx={{
                  width: 13,
                  height: 13,
                  color: theme.palette.primary.contrastText,
                }}
              />
            }
            onClick={addCommunityClick}
          >
            Add Community
          </StyledAddCommunityButton>
          <Menu
            id="community-menu"
            anchorEl={anchorElCommunity}
            open={openAddCommunityMenu}
            onClose={handleAddCommunityClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            PaperProps={{
              style: {
                backgroundImage: 'linear-gradient(rgba(50,50,50,0.2), rgba(50,50,50,0.2))',
                backgroundColor: 'rgba(0,0,0,0.43)',
                backdropFilter: 'blur(5px)',
              },
            }}
          >
            <MenuItem onClick={handleClickCommunityOpen}>Create a Community</MenuItem>
            <MenuItem onClick={handleClickJoinCommunityOpen}>Join a Community</MenuItem>
          </Menu>
          <CreateCommunityModal
            open={openCreateCommunity}
            handleClose={handleCreateCommunityClose}
          />
          <JoinCommunityModal open={openJoinCommunity} handleClose={handleJoinCommunityClose} />
          {COMMUNITIES.map((item: CommunityProps) => (
            <StyledCommunityButton
              key={item.name}
              variant="contained"
              startIcon={
                <Avatar>
                  <Image src={item.avatarUrl} alt="Community Icon" sx={{ width: 50, height: 50 }} />
                </Avatar>
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
        </Box>
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
          ...bgBlur({
            color: theme.palette.background.default,
          }),
          transition: theme.transitions.create(['height'], {
            duration: theme.transitions.duration.shorter,
          }),
          ...(isDesktop && {
            width: `calc(100% - ${NAV.W_LEFT_NAV + NAV.W_RIGHT_NAV + 1}px)`,
            mr: `${NAV.W_RIGHT_NAV + 1}px`,
            height: HEADER.H_DASHBOARD_DESKTOP,
            padding: theme.spacing(5, 0, 0, 0),
            // ...(isOffset && {
            //   height: HEADER.H_DASHBOARD_DESKTOP_OFFSET,
            // }),
            ...(isNavMini && {
              width: `calc(100% - ${NAV.W_LEFT_NAV + NAV.W_DASHBOARD_MINI + 1}px)`,
              mr: `${NAV.W_DASHBOARD_MINI + 1}px`,
            }),
          }),
        }}
      >
        <Toolbar
          sx={{
            height: 1,
            // px: { lg: 5 },
          }}
        >
          {renderContent}
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}
