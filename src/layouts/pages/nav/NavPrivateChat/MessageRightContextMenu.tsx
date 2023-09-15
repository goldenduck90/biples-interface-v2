import { FC } from 'react';
import { Typography, Menu, MenuItem, Stack } from '@mui/material';
import SvgColor from '../../../../components/svg-color';
import Image from '../../../../components/image';

interface MessageRightContextMenuProps {
  contextMenu: any;
  handleCloseMessageMenu: () => void;
}
const MessageRightContextMenu: FC<MessageRightContextMenuProps> = ({
  contextMenu,
  handleCloseMessageMenu,
}) => (
  <Menu
    open={contextMenu !== null}
    onClose={handleCloseMessageMenu}
    anchorReference="anchorPosition"
    anchorPosition={
      contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
    }
    sx={{ width: 200, p: 1.5 }}
  >
    <MenuItem
      onClick={() => {
        handleCloseMessageMenu();
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
        handleCloseMessageMenu();
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
        handleCloseMessageMenu();
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
  </Menu>
);
export default MessageRightContextMenu;
