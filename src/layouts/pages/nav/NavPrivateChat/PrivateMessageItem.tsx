import React, { useState } from 'react';
import { Typography, Badge, Avatar, Stack, ListItemButton, ListItem } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MessageRightContextMenu from './MessageRightContextMenu';

interface PrivateMessageItemProps {
  active: boolean;
}

const PrivateMessageItem = (props: PrivateMessageItemProps) => {
  const { active } = props;
  const theme = useTheme();

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
              variant="dot"
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: active ? '#44b700' : '#565A7F',
                  boxShadow: `0 0 0 2px ${theme.palette.primary.contrastText}`,
                },
              }}
            >
              <Avatar alt="User" src="/assets/images/5.png" sx={{ width: 35, height: 35 }} />
            </Badge>
            <Stack justifyContent="space=between" flexGrow={1} pl={1.5} spacing={0.3}>
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

export default PrivateMessageItem;
