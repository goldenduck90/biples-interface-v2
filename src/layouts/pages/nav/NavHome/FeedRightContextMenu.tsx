import { FC } from 'react';
import { Typography, Menu, MenuItem, Stack } from '@mui/material';
import SvgColor from '../../../../components/svg-color';
import Image from '../../../../components/image';

interface FeedRightContextMenuProps {
  contextMenu: any;
  handleCloseFeedMenu: () => void;
}
const FeedRightContextMenu: FC<FeedRightContextMenuProps> = ({
  contextMenu,
  handleCloseFeedMenu,
}) => (
  <Menu
    open={contextMenu !== null}
    onClose={handleCloseFeedMenu}
    anchorReference="anchorPosition"
    anchorPosition={
      contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
    }
    sx={{ width: 200, p: 1.5 }}
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
        <Typography variant="body1">Pin</Typography>
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
        <Typography variant="body1">Mark as read</Typography>
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
        <Typography variant="body1">Hide</Typography>
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
        <Typography variant="body1" color="#F44336">
          Leave
        </Typography>
      </Stack>
    </MenuItem>
  </Menu>
);
export default FeedRightContextMenu;
