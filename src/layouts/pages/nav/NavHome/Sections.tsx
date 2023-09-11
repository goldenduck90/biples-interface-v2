import { useTheme, styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import SvgColor from '../../../../components/svg-color';

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2,
  padding: theme.spacing(2, 3),
  height: 45,
  width: '100%',
  justifyContent: 'start',
  fontSize: '15px',
}));

const Sections = () => {
  const theme = useTheme();
  return (
    <>
      <StyledButton
        variant="contained"
        startIcon={
          <SvgColor
            src="/assets/images/svgs/home.svg"
            sx={{
              width: 13,
              height: 10,
              color: theme.palette.primary.contrastText,
            }}
          />
        }
      >
        Home
      </StyledButton>
      <StyledButton
        variant="contained"
        sx={{ mt: 2.5 }}
        startIcon={
          <SvgColor
            src="/assets/images/svgs/nft.svg"
            sx={{
              width: 12,
              height: 14,
              color: theme.palette.primary.contrastText,
            }}
          />
        }
      >
        NFTs
      </StyledButton>
      <StyledButton
        variant="contained"
        sx={{ mt: 2.5 }}
        startIcon={
          <SvgColor
            src="/assets/images/svgs/game.svg"
            sx={{
              width: 12,
              height: 14,
              color: theme.palette.primary.contrastText,
            }}
          />
        }
      >
        Gaming
      </StyledButton>
      <StyledButton
        variant="contained"
        sx={{ mt: 2.5 }}
        startIcon={
          <SvgColor
            src="/assets/images/svgs/crypto.svg"
            sx={{
              width: 12,
              height: 14,
              color: theme.palette.primary.contrastText,
            }}
          />
        }
      >
        Cryptocurrency
      </StyledButton>
      <StyledButton
        variant="contained"
        sx={{ mt: 2.5 }}
        startIcon={
          <SvgColor
            src="/assets/images/svgs/3d.svg"
            sx={{
              width: 12,
              height: 14,
              color: theme.palette.primary.contrastText,
            }}
          />
        }
      >
        3D Design
      </StyledButton>
    </>
  );
};

export default Sections;
