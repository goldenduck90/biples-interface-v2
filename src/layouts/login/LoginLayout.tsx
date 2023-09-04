// @mui
import { Stack } from '@mui/material';
// components
import Image from '../../components/image';
//
import { StyledRoot, StyledContent } from './styles';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function LoginLayout({ children }: Props) {
  return (
    <StyledRoot>
      <Image
        disabledEffect
        alt="logo"
        src="/logo/logo_full.svg"
        sx={{ width: 'auto', height: 45 }}
      />
      <StyledContent>
        <Stack sx={{ width: 1 }}> {children} </Stack>

        <Stack
          sx={{
            position: 'absolute',
            bottom: -50,
            right: 0,
            zIndex: -10,
          }}
        >
          <Image
            disabledEffect
            alt="gradient"
            src="/assets/images/auth/gradient.svg"
            sx={{ width: 'auto', height: 400 }}
          />
        </Stack>
      </StyledContent>
    </StyledRoot>
  );
}
