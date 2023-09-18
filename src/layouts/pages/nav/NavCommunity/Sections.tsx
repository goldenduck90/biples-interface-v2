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

const Sections = () => (
  <>
    <StyledButton
      variant="contained"
      startIcon={
        <SvgColor
          src="/assets/images/svgs/chat.svg"
          sx={{
            width: 13,
            height: 13,
            color: 'primary.contrastText',
          }}
        />
      }
    >
      General Chat
    </StyledButton>
    <StyledButton
      variant="contained"
      sx={{ mt: 2.5 }}
      startIcon={
        <SvgColor
          src="/assets/images/svgs/announcements.svg"
          sx={{
            width: 11,
            height: 11,
            color: 'primary.contrastText',
          }}
        />
      }
    >
      Announcements
    </StyledButton>
    <StyledButton
      variant="contained"
      sx={{ mt: 2.5 }}
      startIcon={
        <SvgColor
          src="/assets/images/svgs/camera_alt.svg"
          sx={{
            width: 13,
            height: 13,
            color: 'primary.contrastText',
          }}
        />
      }
    >
      Sneak-peeks
    </StyledButton>
    <StyledButton
      variant="contained"
      sx={{ mt: 2.5 }}
      startIcon={
        <SvgColor
          src="/assets/images/svgs/mic.svg"
          sx={{
            width: 17,
            height: 17,
            color: 'primary.contrastText',
          }}
        />
      }
    >
      Voice chat
    </StyledButton>
    <StyledButton
      variant="contained"
      sx={{ mt: 2.5 }}
      startIcon={
        <SvgColor
          src="/assets/images/svgs/invitation.svg"
          sx={{
            width: 18,
            height: 15,
            color: 'primary.contrastText',
          }}
        />
      }
    >
      Invitation
    </StyledButton>
    <StyledButton
      variant="contained"
      sx={{ mt: 2.5 }}
      startIcon={
        <SvgColor
          src="/assets/images/svgs/store.svg"
          sx={{
            width: 15,
            height: 15,
            color: 'primary.contrastText',
          }}
        />
      }
    >
      Marketplace
    </StyledButton>
    <StyledButton
      variant="contained"
      sx={{ mt: 2.5 }}
      startIcon={
        <SvgColor
          src="/assets/images/svgs/people_alt.svg"
          sx={{
            width: 14,
            height: 14,
            color: 'primary.contrastText',
          }}
        />
      }
    >
      Team
    </StyledButton>
    <StyledButton
      variant="contained"
      sx={{ mt: 2.5 }}
      startIcon={
        <SvgColor
          src="/assets/images/svgs/more_vert.svg"
          sx={{
            width: 14,
            height: 14,
            color: 'primary.contrastText',
          }}
        />
      }
    >
      More
    </StyledButton>
  </>
);

export default Sections;
