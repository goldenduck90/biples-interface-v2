import React from 'react';
// next
import NextLink from 'next/link';
import { IconButton, Typography, Stack, Tooltip, Link } from '@mui/material';
// hooks
import useCopyToClipboard from '../../../../../hooks/useCopyToClipboard';
import Iconify from '../../../../../components/iconify';
import Image from '../../../../../components/image';
import { useSnackbar } from '../../../../../components/snackbar';

interface Props {
  handleContextMenu: (event: React.MouseEvent) => void;
}

const LinkItem = ({ handleContextMenu }: Props) => {
  const { enqueueSnackbar } = useSnackbar();

  const { copy } = useCopyToClipboard();
  const link = 'www.google.com/search?q=google&sxsr...';

  const onCopy = (text: string) => {
    if (text) {
      enqueueSnackbar('Copied!');
      copy(text);
    }
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={1}
      onContextMenu={handleContextMenu}
      sx={{ cursor: 'context-menu' }}
    >
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
      <Stack justifyContent="space-around" flexGrow={1}>
        <Typography variant="body1" fontWeight={600}>
          Document.png
        </Typography>
        <Stack direction="row" alignItems="center">
          <Link component={NextLink} href={link} variant="body2" sx={{ color: '#4776E6' }}>
            {link}
          </Link>
          <Tooltip title="Copy">
            <IconButton onClick={() => onCopy(link)}>
              <Iconify icon="eva:copy-fill" width={24} sx={{ color: 'white' }} />
            </IconButton>
          </Tooltip>
        </Stack>
        <Typography variant="caption" sx={{ color: '#697A8D' }}>
          December 7 at 10:25 PM
        </Typography>
      </Stack>
    </Stack>
  );
};

export default LinkItem;
