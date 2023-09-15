import * as React from 'react';
import {
  Avatar,
  Badge,
  AppBar,
  Stack,
  Toolbar,
  IconButton,
  Slide,
  useScrollTrigger,
  Typography,
} from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
// config
import { HEADER, NAV } from '../../../../config-global';
// hooks
import useResponsive from '../../../../hooks/useResponsive';
// components
import Iconify from '../../../../components/iconify';
import SvgColor from '../../../../components/svg-color';
import Scrollbar from '../../../../components/scrollbar';
import GalleryModal from './GalleryModal';
import FileModal from './FileModal';
import LinkModal from './LinkModal';

type Props = {
  onOpenNavLeft?: VoidFunction;
  onOpenNavRight?: VoidFunction;
};

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

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  borderRadius: '14px',
  width: '58px',
  height: '58px',
  backgroundColor: theme.palette.primary.main,
  backdropFilter: 'blur(2px)',
}));

export default function HeaderPrivateChat({ onOpenNavLeft, onOpenNavRight }: Props) {
  const theme = useTheme();

  const isDesktop = useResponsive('up', 'lg');

  const [openGallery, setOpenGallery] = React.useState(false);
  const [openFile, setOpenFile] = React.useState(false);
  const [openLink, setOpenLink] = React.useState(false);

  const handleOpenGallery = () => {
    setOpenGallery(true);
  };

  const handleCloseGallery = () => {
    setOpenGallery(false);
  };

  const handleOpenFile = () => {
    setOpenFile(true);
  };

  const handleCloseFile = () => {
    setOpenFile(false);
  };

  const handleOpenLink = () => {
    setOpenLink(true);
  };

  const handleCloseLink = () => {
    setOpenLink(false);
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
        <Stack direction="row" alignItems="center" mx="auto" spacing={2}>
          <StyledIconButton>
            <SvgColor
              src="/assets/images/svgs/search-white.svg"
              sx={{
                width: 26,
                height: 26,
                color: 'primary.contrastText',
              }}
            />
          </StyledIconButton>
          <StyledIconButton>
            <SvgColor
              src="/assets/images/svgs/videocam.svg"
              sx={{
                width: 26,
                height: 26,
                color: 'primary.contrastText',
              }}
            />
          </StyledIconButton>
          <StyledIconButton>
            <SvgColor
              src="/assets/images/svgs/call.svg"
              sx={{
                width: 26,
                height: 26,
                color: 'primary.contrastText',
              }}
            />
          </StyledIconButton>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={2}
            sx={{
              bgcolor: 'primary.main',
              borderRadius: '14px',
              height: 58,
              width: 385,
              px: 'auto',
            }}
          >
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot"
            >
              <Avatar alt="User" src="/assets/images/4.png" sx={{ width: 42, height: 42 }} />
            </StyledBadge>
            <Stack>
              <Typography
                variant="subtitle1"
                sx={{
                  backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                }}
              >
                Andrew Jackson
              </Typography>
              <Typography variant="caption">Last seen 2 hours ago</Typography>
            </Stack>
          </Stack>
          <StyledIconButton onClick={handleOpenGallery}>
            <SvgColor
              src="/assets/images/svgs/image.svg"
              sx={{
                width: 26,
                height: 26,
                color: 'primary.contrastText',
              }}
            />
          </StyledIconButton>
          <StyledIconButton onClick={handleOpenFile}>
            <SvgColor
              src="/assets/images/svgs/text_snippet.svg"
              sx={{
                width: 26,
                height: 26,
                color: 'primary.contrastText',
              }}
            />
          </StyledIconButton>
          <StyledIconButton onClick={handleOpenLink}>
            <SvgColor
              src="/assets/images/svgs/link.svg"
              sx={{
                width: 26,
                height: 26,
                color: 'primary.contrastText',
              }}
            />
          </StyledIconButton>
        </Stack>
      </Scrollbar>
      {!isDesktop && (
        <IconButton onClick={onOpenNavRight} sx={{ ml: 1, color: 'text.primary' }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      <GalleryModal open={openGallery} handleClose={handleCloseGallery} />

      <FileModal open={openFile} handleClose={handleCloseFile} />

      <LinkModal open={openLink} handleClose={handleCloseLink} />
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
