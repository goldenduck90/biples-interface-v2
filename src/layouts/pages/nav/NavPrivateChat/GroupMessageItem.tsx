import React, { useState } from 'react';
import { Typography, Badge, Avatar, Stack, ListItem, ListItemButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import MessageRightContextMenu from './MessageRightContextMenu';

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 20,
  height: 20,
  border: 'none',
}));

const GroupMessageItem = () => {
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

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      onContextMenu={handleContextMenu}
      sx={{ cursor: 'context-menu' }}
    >
      <ListItem disablePadding>
        <ListItemButton disableGutters>
          <Stack direction="row" alignItems="center" flexGrow={1} justifyContent="space-between">
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
            <Stack justifyContent="space=between" flexGrow={1} pl={2.5} spacing={0.3}>
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
          </Stack>
        </ListItemButton>
      </ListItem>

      <MessageRightContextMenu
        contextMenu={contextMenu}
        handleCloseMessageMenu={handleCloseMenu}
      />
    </Stack>
  );
};

export default GroupMessageItem;
