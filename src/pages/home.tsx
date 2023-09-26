// next
import Head from 'next/head';
// @mui
import { styled } from '@mui/material/styles';
import { Container, InputAdornment, OutlinedInput, Stack } from '@mui/material';
// layouts
import { HomeLayout } from '../layouts/pages';
// components
import { useSettingsContext } from '../components/settings';
// sections
import { SearchResult, FeaturedCommunity, CuratedCommunity } from '../sections/home';
import SvgColor from '../components/svg-color';

const StyledOutlinedInput = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: '0px 16px',
  borderRadius: '10px',
}));

// ----------------------------------------------------------------------

HomePage.getLayout = (page: React.ReactElement) => <HomeLayout displayLayout = 'home'>{page}</HomeLayout>;

// ----------------------------------------------------------------------

export default function HomePage() {
  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> Home | Biples</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Stack
          px={4}
          py={3}
          sx={{
            bgcolor: 'primary.main',
            borderRadius: '16px',
          }}
        >
          <StyledOutlinedInput
            defaultValue=""
            fullWidth
            placeholder="Explorer"
            startAdornment={
              <InputAdornment position="start">
                <SvgColor src="/assets/images/svgs/search.svg" sx={{ width: 12, height: 12 }} />
              </InputAdornment>
            }
          />

          <SearchResult />
          <FeaturedCommunity />
          <CuratedCommunity />
        </Stack>
      </Container>
    </>
  );
}
