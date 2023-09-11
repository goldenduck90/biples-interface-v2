import { Typography, Stack, IconButton } from '@mui/material';
import { useTheme, styled } from '@mui/material/styles';
import SvgColor from '../../../../components/svg-color';
import Image from '../../../../components/image';
import { StyledRoot } from './styles';

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: '30px',
  height: '30px',
  backgroundColor: theme.palette.primary.main,
  border: 'none',
  borderRadius: '7.5px',
}));

const Wallet = () => {
  const theme = useTheme();
  return (
    <StyledRoot
      sx={{
        height: 58,
        width: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Stack direction="row">
        <Image src="/assets/images/svgs/metamask.svg" alt="" sx={{ width: 30, height: 30 }} />
        <Stack direction="column" pl={1}>
          <Typography sx={{ fontSize: '10px', color: '#565A7F' }}>Ethereum</Typography>
          <Stack direction="row" alignItems="center">
            <Typography
              sx={{
                fontSize: '10px',
                color: theme.palette.primary.contrastText,
                pr: '5px',
              }}
            >
              0x63Z...2dcd1
            </Typography>
            <SvgColor
              src="/assets/images/svgs/arrow-down.svg"
              sx={{ width: '6px', height: '3.5px', color: theme.palette.primary.contrastText }}
            />
          </Stack>
        </Stack>
      </Stack>
      <StyledIconButton>
        <SvgColor
          src="/assets/images/svgs/copy.svg"
          sx={{
            width: '11px',
            height: '11px',
            color: theme.palette.primary.contrastText,
          }}
        />
      </StyledIconButton>
      <StyledIconButton>
        <SvgColor
          src="/assets/images/svgs/power.svg"
          sx={{
            width: '11px',
            height: '11px',
            color: theme.palette.primary.contrastText,
          }}
        />
      </StyledIconButton>
    </StyledRoot>
  );
};

export default Wallet;
