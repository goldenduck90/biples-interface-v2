// next
import { useRouter } from 'next/router';

import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import SvgColor from '../../../../components/svg-color';


export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: Number(theme.shape.borderRadius) * 2,
  padding: theme.spacing(2, 3),
  height: 59,
  width: 287,
  paddingLeft:50,
  justifyContent: 'start',
  fontSize: '18px',
//   fontFamily:'sans-serif'
}));

const NavButton = () => {
  const router = useRouter();

  const handleButtonClick = (route:string) => {
    router.push(`/admin/${route}`);
  }

  return (
    <>
        <StyledButton
            variant="contained"
            startIcon={
                <SvgColor
                    src="/assets/images/svgs/settings.svg"
                    sx={{
                        width: 15,
                        height: 15,
                        color: 'primary.contrastText',
                    }}
                />
            }
            // onClick={() => handleButtonClick('generalChat')}
            onClick={() => handleButtonClick('panel')}
        >
            General
        </StyledButton>
        <StyledButton
            variant="contained"
            sx={{ mt: 2.5 }}
            startIcon={
                <SvgColor
                    src="/assets/images/svgs/role.svg"
                    sx={{
                    width: 16,
                    height: 11,
                    color: 'primary.contrastText',
                    }}
                />
            }
            // onClick={() => handleButtonClick('announcements')}
            onClick={() => handleButtonClick('roles')}
        >
            Roles
        </StyledButton>
        <StyledButton
        variant="contained"
        sx={{ mt: 2.5 }}
        startIcon={
            <SvgColor
                src="/assets/images/svgs/marketplace.svg"
                sx={{
                    width: 17,
                    height: 17,
                    color: 'primary.contrastText',
                }}
            />
        }
        // onClick={() => handleButtonClick('sneakPeeks')}
        onClick={() => handleButtonClick('marketplace')}
        >
            Marketplace
        </StyledButton>
        <StyledButton
        variant="contained"
        sx={{ mt: 2.5 }}
        startIcon={
            <SvgColor
                src="/assets/images/svgs/overview.svg"
                sx={{
                    width: 17,
                    height: 17,
                    color: 'primary.contrastText',
                }}
            />
        }
        // onClick={() => handleButtonClick('voiceChat')}
        onClick={() => handleButtonClick('overview')}
        >
            Overview
        </StyledButton>
    
    </>
  )
};

export default NavButton;
