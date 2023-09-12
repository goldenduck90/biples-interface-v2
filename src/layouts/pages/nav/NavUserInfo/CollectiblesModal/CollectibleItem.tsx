import { Typography, Stack } from '@mui/material';
import Image from 'next/image';
import SvgColor from '../../../../../components/svg-color';
import { StyledRoot, StyledInfo, StyledDetailsButton } from './styles';

export default function CollectibleItem() {
  return (
    <StyledRoot>
      <Image
        src="/assets/images/collectible.png"
        alt=""
        width={270}
        height={270}
        style={{ borderRadius: '15px' }}
      />
      <StyledDetailsButton>Details</StyledDetailsButton>
      <StyledInfo>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}>
            Tron #482
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="center" spacing={0.5}>
            <Image src="/assets/images/tron.svg" alt="" width={10} height={10} />
            <Typography variant="overline" fontWeight={600}>
              Tronwars
            </Typography>
            <SvgColor
              src="/assets/images/svgs/verified.svg"
              sx={{
                width: 10,
                height: 10,
              }}
            />
          </Stack>
        </Stack>
      </StyledInfo>
    </StyledRoot>
  );
}
