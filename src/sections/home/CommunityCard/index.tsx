import { FC } from 'react';
import { Box, Typography, Stack } from '@mui/material';
import SvgColor from '../../../components/svg-color';
import Image from '../../../components/image';
import { StyledRoot, StyledInfo } from './styles';

interface CommunityCardProps {
  community: {
    id: number;
    name: string;
    description: string;
    members: number;
    image: string;
  };
}
const CommunityCard: FC<CommunityCardProps> = ({ community }) => (
  <StyledRoot>
    <Image
      disabledEffect
      src={community.image}
      alt=""
      style={{ borderRadius: '10px', height: 195, width: 380 }}
    />
    <StyledInfo>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#fff' }}>
          {community.name}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
          <SvgColor
            src="/assets/images/svgs/users.svg"
            sx={{
              width: 10,
              height: 10,
              color: '#fff',
            }}
          />
          <Typography sx={{ fontSize: '9px', color: '#fff', ml: 1 }}>
            {community.members} members
          </Typography>
        </Box>
      </Stack>
      <Typography sx={{ fontSize: '8px', color: '#fff' }}>{community.description}</Typography>
    </StyledInfo>
  </StyledRoot>
);

export default CommunityCard;
