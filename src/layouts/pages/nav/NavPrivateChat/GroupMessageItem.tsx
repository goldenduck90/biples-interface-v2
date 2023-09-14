import React, { useState } from 'react';
import {
  Typography,
  Badge,
  Avatar,
  Stack,
  IconButton,
  MenuItem,
  ListItemButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Iconify from '../../../../components/iconify';
import MenuPopover from '../../../../components/menu-popover';
import Image from '../../../../components/image';
import SvgColor from '../../../../components/svg-color';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 20,
  height: 20,
  border: 'none',
}));

const GroupMessageItem = () => {
  const [openMenu, setOpenMenu] = useState<HTMLElement | null>(null);

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    setOpenMenu(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpenMenu(null);
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <ListItemButton disableGutters>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={<SmallAvatar alt="Badge Avatar" src="/assets/images/1.png" />}
        >
          <Avatar
            alt="Main Avatar"
            src="/assets/images/2.png"
            sx={{
              width: 26,
              height: 26,
            }}
          />
        </Badge>
        <Stack justifyContent="space=between" flexGrow={1} pl={2} spacing={0.3}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography
              variant="body2"
              fontWeight={500}
              sx={{
                backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Dave Bronx
            </Typography>
            <Typography variant="overline">14:40</Typography>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="overline">Dave is typing...</Typography>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                background: 'linear-gradient(265.96deg, #00A3FF 4.86%, #E140E4 93.41%)',
                borderRadius: 50,
                width: 16,
                height: 16,
              }}
            >
              <Typography
                variant="overline"
                sx={{
                  fontWeight: '600',
                  color: 'white',
                }}
              >
                2
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </ListItemButton>
      <IconButton size="small" onClick={handleOpenMenu}>
        <Iconify icon="eva:more-vertical-fill" sx={{ color: 'primary.contrastText' }} />
      </IconButton>
      <MenuPopover
        open={openMenu}
        onClose={handleCloseMenu}
        sx={{ width: 160, p: 1.5 }}
        disabledArrow
      >
        <MenuItem
          onClick={() => {
            handleCloseMenu();
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <SvgColor
              src="/assets/images/svgs/pin.svg"
              sx={{
                width: 14,
                height: 14,
              }}
            />
            <Typography variant="body1">Pin</Typography>
          </Stack>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <SvgColor
              src="/assets/images/svgs/eye.svg"
              sx={{
                width: 14,
                height: 14,
              }}
            />
            <Typography variant="body1">Mark as read</Typography>
          </Stack>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseMenu();
          }}
        >
          <Stack direction="row" alignItems="center" spacing={1}>
            <Image
              disabledEffect
              src="/assets/images/svgs/delete.svg"
              alt=""
              sx={{
                width: 14,
                height: 14,
              }}
            />
            <Typography variant="body1" color="#F44336">
              Delete
            </Typography>
          </Stack>
        </MenuItem>
      </MenuPopover>
    </Stack>
  );
};

export default GroupMessageItem;
