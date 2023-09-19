import NextLink from 'next/link';
// @mui
import {
  Typography,
  TextField,
  Divider,
  Stack,
  Link,
  Avatar,
  InputAdornment,
  IconButton,
} from '@mui/material';
// hooks
import useCopyToClipboard from '../../../../hooks/useCopyToClipboard';
// components
import { useSnackbar } from '../../../../components/snackbar';
import Image from '../../../../components/image';
import SvgColor from '../../../../components/svg-color';
import Iconify from '../../../../components/iconify';

// ----------------------------------------------------------------------

export default function Info() {
  const { copy } = useCopyToClipboard();
  const link = 'bip.gg/6sjfkfkf';

  const { enqueueSnackbar } = useSnackbar();

  const onCopy = (text: string) => {
    if (text) {
      enqueueSnackbar('Copied!');
      copy(text);
    }
  };

  return (
    <Stack
      p={2}
      spacing={2.5}
      sx={{
        borderRadius: 2,
        bgcolor: 'primary.main',
      }}
    >
      <Stack alignItems="center" justifyContent="center" spacing={0.5}>
        <Avatar
          alt=""
          src="/assets/images/tronwars.png"
          sx={{ width: 60, height: 60, bgcolor: 'white' }}
        />
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="subtitle2">Tronwars</Typography>
          <SvgColor
            src="/assets/images/svgs/verified.svg"
            sx={{
              width: 14,
              height: 14,
            }}
          />
        </Stack>
      </Stack>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack
          direction="row"
          spacing={0.5}
          p={1.5}
          sx={{ bgcolor: 'secondary.main', borderRadius: '10px' }}
        >
          <SvgColor
            src="/assets/images/svgs/person.svg"
            sx={{
              width: 16,
              height: 16,
            }}
          />
          <Typography variant="body1" fontWeight={600} lineHeight={1}>
            23 700
          </Typography>
        </Stack>
        <Stack
          direction="row"
          spacing={0.5}
          p={1.5}
          sx={{ bgcolor: 'secondary.main', borderRadius: '10px' }}
        >
          <Image
            disabledEffect
            src="/assets/images/svgs/online.svg"
            alt=""
            sx={{ width: 10, height: 10 }}
          />
          <Typography variant="body1" fontWeight={600} lineHeight={1}>
            9 300
          </Typography>
        </Stack>
      </Stack>
      <Divider sx={{ color: 'primary.main' }} />
      <Stack direction="row" spacing={3} alignItems="center" justifyContent="center">
        <Link component={NextLink} href="/">
          <Image
            disabledEffect
            src="/assets/images/svgs/twitter.svg"
            alt=""
            sx={{ width: 21, height: 'auto' }}
          />
        </Link>
        <Link component={NextLink} href="/">
          <Image
            disabledEffect
            src="/assets/images/svgs/color-medium.svg"
            alt=""
            sx={{ width: 21, height: 'auto', color: 'primary.contrastText' }}
          />
        </Link>
        <Link component={NextLink} href="/">
          <Image
            disabledEffect
            src="/assets/images/svgs/opensea.svg"
            alt=""
            sx={{ width: 21, height: 'auto' }}
          />
        </Link>
        <Link component={NextLink} href="/">
          <Image
            disabledEffect
            src="/assets/images/svgs/website.svg"
            alt=""
            sx={{ width: 21, height: 'auto' }}
          />
        </Link>
      </Stack>
      <Divider sx={{ color: 'primary.main' }} />
      <TextField
        name="invite-link"
        placeholder="Invite Link"
        label=""
        defaultValue={link}
        InputLabelProps={{ shrink: false }}
        sx={{ bgcolor: '#303030', borderRadius: 1 }}
        InputProps={{
          style: {
            height: '36px',
          },
          readOnly: true,
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => onCopy(link)}>
                <Iconify icon="eva:copy-fill" width={24} sx={{ color: 'white' }} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Stack>
  );
}
