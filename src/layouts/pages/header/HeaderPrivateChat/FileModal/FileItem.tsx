import * as React from 'react';
import { IconButton, Typography, Divider, Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SvgColor from '../../../../../components/svg-color';
import Image from '../../../../../components/image';

interface Props {
  handleContextMenu: (event: React.MouseEvent) => void;
}

const FileItem = ({ handleContextMenu }: Props) => {
  const theme = useTheme();

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      onContextMenu={handleContextMenu}
      sx={{ cursor: 'context-menu' }}
    >
      <Stack direction="row" spacing={1}>
        <Image
          disabledEffect
          src="/assets/images/1.png"
          alt=""
          sx={{
            width: 'auto',
            height: 65,
            borderRadius: '10px',
          }}
        />
        <Stack justifyContent="space-between" flexGrow={1}>
          <Stack>
            <Typography variant="body1" fontWeight={600}>
              Document.png
            </Typography>
            <Typography variant="caption" sx={{ color: '#697A8D' }}>
              21.5MB
            </Typography>
          </Stack>
          <Divider sx={{ color: 'primary.contrastText' }} />
          <Typography variant="caption" sx={{ color: '#697A8D' }}>
            December 7 at 10:25 PM
          </Typography>
        </Stack>
      </Stack>
      <IconButton>
        <SvgColor
          src="/assets/images/svgs/filedown.svg"
          sx={{
            width: 20,
            height: 20,
            color: 'primary.contrastText',
          }}
        />
      </IconButton>
    </Stack>
  );
};

export default FileItem;
