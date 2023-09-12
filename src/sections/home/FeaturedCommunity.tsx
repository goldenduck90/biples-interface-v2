import { Typography, Stack, Unstable_Grid2 as Grid } from '@mui/material';
import SvgColor from '../../components/svg-color';
import CommunityCard from './CommunityCard';
import { FEATURED_COMMUNITIES } from '../../constants/communities';

const FeaturedCommunity = () => (
  <Stack mt={4}>
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="subtitle1" color="white">
        Featured Community
      </Typography>
      <Stack direction="row" alignItems="center" sx={{ cursor: 'pointer' }}>
        <Typography fontSize="20px" mr={1}>
          See all
        </Typography>
        <SvgColor src="/assets/images/svgs/right_arrow.svg" sx={{ width: 8, height: 8 }} />
      </Stack>
    </Stack>
    <Grid
      container
      direction={{ xs: 'column', xl: 'row' }}
      justifyContent="center"
      alignItems="center"
      mt={3}
      spacing={2}
    >
      {FEATURED_COMMUNITIES.map((community) => (
        <Grid xl={4} key={community.id}>
          <CommunityCard community={community} />
        </Grid>
      ))}
    </Grid>
  </Stack>
);

export default FeaturedCommunity;
