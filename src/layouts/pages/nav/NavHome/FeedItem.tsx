import { useState } from 'react';
import { Typography, Stack, ListItemButton, ListItem } from '@mui/material';
import SvgColor from '../../../../components/svg-color';
import Image from '../../../../components/image';
import FeedRightContextMenu from './FeedRightContextMenu';

const FeedItem = () => {
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

  const handleCloseFeedMenu = () => {
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
            <Stack direction="row">
              <Image
                disabledEffect
                src="/assets/images/tron.svg"
                alt=""
                sx={{ borderRadius: 50, width: 30, height: 30 }}
              />
              <Stack pl={1}>
                <Stack direction="row" alignItems="center" spacing={0.5}>
                  <Typography variant="body1" color="white">
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
            </Stack>

            <Stack alignItems="end" justifyContent="end" spacing={0.5}>
              <Typography sx={{ fontSize: '10px' }}>14:40</Typography>
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
                  variant="caption"
                  lineHeight={1}
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
      </ListItem>
      <FeedRightContextMenu contextMenu={contextMenu} handleCloseFeedMenu={handleCloseFeedMenu} />
    </Stack>
  );
};

export default FeedItem;
