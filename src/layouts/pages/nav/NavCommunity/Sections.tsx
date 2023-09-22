// next
import { useRouter } from 'next/router';

import { styled } from '@mui/material/styles';
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
  const router = useRouter();

  const handleButtonClick = (route:string) => {
    router.push(`/community/${route}`);
  }

  return (
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
          // onClick={() => handleButtonClick('generalChat')}
          onClick={() => handleButtonClick('chat')}
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
        // onClick={() => handleButtonClick('announcements')}
        onClick={() => handleButtonClick('chat')}
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
        // onClick={() => handleButtonClick('sneakPeeks')}
        onClick={() => handleButtonClick('chat')}
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
        // onClick={() => handleButtonClick('voiceChat')}
        onClick={() => handleButtonClick('chat')}
      >
        Voice chat
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
        // onClick={() => handleButtonClick('marketplace')}
        onClick={() => handleButtonClick('chat')}
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
        onClick={() => handleButtonClick('team')}
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
        // onClick={() => handleButtonClick('more')}
        onClick={() => handleButtonClick('chat')}
      >
        More
      </StyledButton>
    </>
  )
};

export default Sections;
