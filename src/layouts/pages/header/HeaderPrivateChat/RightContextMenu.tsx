import { FC } from 'react';
import { Typography, Menu, MenuItem, Stack } from '@mui/material';
import SvgColor from '../../../../components/svg-color';

interface RightContextMenuProps {
  contextMenu: any;
  handleCloseMenu: () => void;
}
const RightContextMenu: FC<RightContextMenuProps> = ({ contextMenu, handleCloseMenu }) => (
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
        <Typography variant="body1">View in chat</Typography>
      </Stack>
    </MenuItem>
    <MenuItem
      onClick={() => {
        handleCloseMenu();
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1}>
        <SvgColor
          src="/assets/images/svgs/forward.svg"
          sx={{
            width: 14,
            height: 14,
          }}
        />
        <Typography variant="body1">Forward</Typography>
      </Stack>
    </MenuItem>
  </Menu>
);
export default RightContextMenu;
