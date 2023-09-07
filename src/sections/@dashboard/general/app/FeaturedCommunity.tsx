import { Box, Typography, Stack } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import SvgColor from '../../../../components/svg-color';
import CommunityCard from './CommunityCard';
import { FEATURED_COMMUNITIES } from '../../../../constants/communities';

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  fontSize: '20px',
}));

const FeaturedCommunity = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', mt: 3 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <StyledTypography sx={{ fontWeight: '600' }}>Featured Community</StyledTypography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <StyledTypography mr={1}>See all</StyledTypography>
          <SvgColor
            src="/assets/images/svgs/right_arrow.svg"
            sx={{
              width: 8,
              height: 8,
              color: theme.palette.primary.contrastText,
            }}
          />
        </Box>
      </Box>
      <Stack direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
        {FEATURED_COMMUNITIES.map((community) => (
          <CommunityCard key={community.id} community={community} />
        ))}
      </Stack>
    </Box>
  );
};

export default FeaturedCommunity;
