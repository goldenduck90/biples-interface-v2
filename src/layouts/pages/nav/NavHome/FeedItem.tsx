import { useState } from 'react';
import { Box, Typography, Stack, MenuItem, ListItemButton, IconButton } from '@mui/material';
import SvgColor from '../../../../components/svg-color';
import MenuPopover from '../../../../components/menu-popover';
import Image from '../../../../components/image';
import Iconify from '../../../../components/iconify';

const FeedItem = () => {
  const [openFeedMenu, setOpenFeedMenu] = useState<HTMLElement | null>(null);

  const handleOpenFeedMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenFeedMenu(event.currentTarget);
  };

  const handleCloseFeedMenu = () => {
    setOpenFeedMenu(null);
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <ListItemButton disableGutters>
        <Image
          disabledEffect
          src="/assets/images/tron.svg"
          alt=""
          sx={{ borderRadius: 50, width: 30, height: 30 }}
        />
        <Stack direction="row" spacing={1}>
          <Stack pl={1}>
            <Stack direction="row" alignItems="center" spacing={0.5}>
              <Typography variant="subtitle1" color="white">
                Tronwars
              </Typography>
              <SvgColor
                src="/assets/images/svgs/verified.svg"
                sx={{
                  width: 12,
                  height: 12,
                  color: 'primary.contrastText',
                }}
              />
            </Stack>
            <Typography sx={{ fontSize: '9px' }}>New collection available!!!</Typography>
          </Stack>
          <Stack alignItems="center" justifyContent="space-between" spacing={0.5}>
            <Typography sx={{ fontSize: '10px' }}>14:40</Typography>
            <Box
              sx={{
                background: 'linear-gradient(265.96deg, #00A3FF 4.86%, #E140E4 93.41%)',
                borderRadius: 50,
                width: 16,
                height: 16,
              }}
            >
              <Typography
                sx={{
                  fontSize: '12px',
                  fontWeight: '600',
                  color: '#fff',
                  textAlign: 'center',
                }}
              >
                2
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </ListItemButton>

      <IconButton size="small" onClick={handleOpenFeedMenu}>
        <Iconify icon="eva:more-vertical-fill" sx={{ color: 'primary.contrastText' }} />
      </IconButton>
      <MenuPopover
        open={openFeedMenu}
        onClose={handleCloseFeedMenu}
        sx={{ width: 200, p: 0 }}
        disabledArrow
      >
        <MenuItem
          onClick={() => {
            handleCloseFeedMenu();
          }}
        >
          <Stack direction="row" alignItems="center">
            <SvgColor
              src="/assets/images/svgs/pin.svg"
              sx={{
                width: 14,
                height: 14,
                mr: 1,
              }}
            />
            <Typography variant="subtitle1">Pin</Typography>
          </Stack>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseFeedMenu();
          }}
        >
          <Stack direction="row" alignItems="center">
            <SvgColor
              src="/assets/images/svgs/eye.svg"
              sx={{
                width: 14,
                height: 14,
                mr: 1,
              }}
            />
            <Typography variant="subtitle1">Mark as read</Typography>
          </Stack>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseFeedMenu();
          }}
        >
          <Stack direction="row" alignItems="center">
            <SvgColor
              src="/assets/images/svgs/eye-close.svg"
              sx={{
                width: 14,
                height: 14,
                mr: 1,
              }}
            />
            <Typography variant="subtitle1">Hide</Typography>
          </Stack>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseFeedMenu();
          }}
        >
          <Stack direction="row" alignItems="center">
            <Image
              disabledEffect
              src="/assets/images/svgs/logout.svg"
              alt=""
              sx={{
                width: 14,
                height: 14,
                mr: 1,
              }}
            />
            <Typography variant="subtitle1" color="#F44336">
              Leave
            </Typography>
          </Stack>
        </MenuItem>
      </MenuPopover>
    </Stack>
  );
};

export default FeedItem;
