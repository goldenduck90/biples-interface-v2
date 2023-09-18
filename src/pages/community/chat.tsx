// next
import Head from 'next/head';
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// layouts
import { CommunityLayout } from '../../layouts/pages';
// components
import { useSettingsContext } from '../../components/settings';
// sections
import { Messages } from '../../sections/chat';

const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3, 4),
  backgroundColor: theme.palette.primary.main,
  borderRadius: '15px',
}));

// ----------------------------------------------------------------------

CommunityChat.getLayout = (page: React.ReactElement) => <CommunityLayout>{page}</CommunityLayout>;

// ----------------------------------------------------------------------

export default function CommunityChat() {
  // const { user } = useAuthContext();

  // const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> Community Chat | Biples</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <StyledRoot>
          <Messages />
        </StyledRoot>
      </Container>
    </>
  );
}
