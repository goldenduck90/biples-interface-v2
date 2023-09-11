import { Typography, Stack } from '@mui/material';
import { FEATURED_COMMUNITIES } from '../../constants/communities';
import CommunityCard from './CommunityCard';
import SvgColor from '../../components/svg-color';

const CuratedCommunity = () => (
  <Stack mt={4}>
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="h5" color="white">
        Featured Community
      </Typography>
      <Stack direction="row" alignItems="center" sx={{ cursor: 'pointer' }}>
        <Typography fontSize="20px" mr={1}>
          See all
        </Typography>
        <SvgColor
          src="/assets/images/svgs/right_arrow.svg"
          sx={{
            width: 8,
            height: 8,
          }}
        />
      </Stack>
    </Stack>
    <Stack direction="row" justifyContent="space-between" mt={3}>
      {FEATURED_COMMUNITIES.map((community) => (
        <CommunityCard key={community.id} community={community} />
      ))}
    </Stack>
  </Stack>
);

export default CuratedCommunity;
