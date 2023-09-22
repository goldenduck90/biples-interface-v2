// next
import Head from 'next/head';
// @mui
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
// layouts
import { AdminLayout } from '../../layouts/pages';
// components
import { useSettingsContext } from '../../components/settings';
// sections
import { Panel } from '../../sections/admin';


const StyledRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3, 4),
  backgroundColor: theme.palette.primary.main,
  borderRadius: '15px',
}));

// ----------------------------------------------------------------------

CommunityChat.getLayout = (page: React.ReactElement) => <AdminLayout>{page}</AdminLayout>;

// ----------------------------------------------------------------------

export default function CommunityChat() {
  // const { user } = useAuthContext();

  // const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> Admin Panel | Biples</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <StyledRoot>
          <Panel />
        </StyledRoot>
      </Container>
    </>
  );
}
