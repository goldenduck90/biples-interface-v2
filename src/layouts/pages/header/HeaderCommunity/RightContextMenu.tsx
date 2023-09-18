import { FC, useState } from 'react';
import { Typography, Menu, MenuItem, Stack } from '@mui/material';
import SvgColor from '../../../../components/svg-color';
import Image from '../../../../components/image';

interface RightContextMenuProps {
  contextMenu: any;
  handleCloseMenu: () => void;
}
const RightContextMenu: FC<RightContextMenuProps> = ({ contextMenu, handleCloseMenu }) => {
  const [notificationStatus, setNotificationStatus] = useState(false);
  return (
    <Menu
      open={contextMenu !== null}
      onClose={handleCloseMenu}
      anchorReference="anchorPosition"
      anchorPosition={
        contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
      }
      sx={{ width: 200, p: 1.5 }}
    >
      <MenuItem
        onClick={() => {
          setNotificationStatus((prevState) => !prevState);
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <SvgColor
            src={`/assets/images/svgs/${notificationStatus ? 'volume_up' : 'volume_off'}.svg`}
            sx={{
              width: 14,
              height: 14,
              color: notificationStatus ? 'primary.contrastText' : '#565A7F',
            }}
          />
          <Typography
            variant="body1"
            color={notificationStatus ? 'primary.contrastText' : '#565A7F'}
          >
            Notifications
          </Typography>
        </Stack>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleCloseMenu();
        }}
      >
        <Stack direction="row" alignItems="center">
          <SvgColor
            src="/assets/images/svgs/link.svg"
            sx={{
              width: 14,
              height: 14,
              mr: 1,
            }}
          />
          <Typography variant="body1">Copy link</Typography>
        </Stack>
      </MenuItem>
      <MenuItem
        onClick={() => {
          handleCloseMenu();
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
          <Typography variant="body1" color="#F44336">
            Leave
          </Typography>
        </Stack>
      </MenuItem>
    </Menu>
  );
};
export default RightContextMenu;
