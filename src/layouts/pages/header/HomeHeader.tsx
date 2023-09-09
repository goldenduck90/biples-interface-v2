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
  MenuItem,
  Stack,
  Divider,
} from '@mui/material';
// hooks
import useResponsive from '../../../hooks/useResponsive';
// config
import { HEADER, NAV } from '../../../config-global';
// components
import Iconify from '../../../components/iconify';
import Scrollbar from '../../../components/scrollbar';
import SvgColor from '../../../components/svg-color';
import MenuPopover from '../../../components/menu-popover';
import { CustomAvatar } from '../../../components/custom-avatar';
//
import { COMMUNITIES } from '../../../constants/communities';
import CreateCommunityModal from './CreateCommunityModal';
import JoinCommunityModal from './JoinCommunityModal';
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

export default function HomeHeader({ onOpenNavLeft, onOpenNavRight }: Props) {
  const theme = useTheme();

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
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={2.2}>
          <StyledAddCommunityButton
            variant="contained"
            startIcon={
              <SvgColor src="/assets/images/svgs/plus.svg" sx={{ width: 17, height: 17 }} />
            }
            onClick={handleOpenAddCommunityMenu}
          >
            Add Community
          </StyledAddCommunityButton>

          {/* <Menu
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
          </Menu> */}

          {COMMUNITIES.map((item: CommunityProps) => (
            <StyledCommunityButton
              key={item.name}
              variant="contained"
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
        open={openAddCommunityMenu}
        onClose={handleCloseAddCommunityMenu}
        sx={{ width: 200, p: 0 }}
      >
        <MenuItem onClick={handleOpenCreateCommunity}>Create a Community</MenuItem>
        <Divider sx={{ borderStyle: 'dashed' }} />
        <MenuItem onClick={handleOpenJoinCommunity}>Join a Community</MenuItem>
      </MenuPopover>
      <CreateCommunityModal open={openCreateCommunity} handleClose={handleCloseCreateCommunity} />
      <JoinCommunityModal open={openJoinCommunity} handleClose={handleCloseJoinCommunity} />
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
