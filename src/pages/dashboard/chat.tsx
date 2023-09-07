// next
import Head from 'next/head';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Divider } from '@mui/material';
// auth
// import { useAuthContext } from '../../auth/useAuthContext';
// layouts
import { ChatLayout } from '../../layouts/dashboard';
// _mock_
// import {
//   _ecommerceNewProducts,
//   _ecommerceSalesOverview,
//   _ecommerceBestSalesman,
//   _ecommerceLatestProducts,
// } from '../../_mock/arrays';
// components
import { useSettingsContext } from '../../components/settings';
// sections
import { MessageItem } from '../../sections/@dashboard/general/chat';
// import { AppWelcome } from '../../sections/@dashboard/general/app';
// assets
// import { MotivationIllustration } from '../../assets/illustrations';

const StyledRootBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3, 4),
  backgroundColor: theme.palette.primary.main,
  borderRadius: '15px',
}));

// ----------------------------------------------------------------------

PrivateChat.getLayout = (page: React.ReactElement) => <ChatLayout>{page}</ChatLayout>;

// ----------------------------------------------------------------------

export default function PrivateChat() {
  // const { user } = useAuthContext();

  // const theme = useTheme();

  const { themeStretch } = useSettingsContext();

  return (
    <>
      <Head>
        <title> Private Chat | Biples</title>
      </Head>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <StyledRootBox>
          {Array.from(Array(3)).map((_, index) => (
            <MessageItem key={index} active />
          ))}
          <MessageItem active={false} />
          <Divider />
        </StyledRootBox>
      </Container>
    </>
  );
}
