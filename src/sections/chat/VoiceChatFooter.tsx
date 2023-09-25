import {
  Stack,
  IconButton,
} from '@mui/material';
// auth
import { useAuthContext } from '../../auth/useAuthContext';
import SvgColor from '../../components/svg-color';

const VoiceChatFooter = () => {
  const { user } = useAuthContext();

  return (
    <Stack direction="row" alignItems="center" justifyContent="center" mt={3} spacing={5}>
        <IconButton
            sx={{
                height: 50,
                width: 50,
                bgcolor: '#E82B2B',
                backDropFilter: '12px',
                '&:hover': {
                bgcolor: '#E82B2B',
                },
            }}
        >
        <SvgColor
            src="/assets/images/svgs/call_end.svg"
            sx={{ width: 30, height: 30, color: 'primary.contrastText' }}
        />
        </IconButton>
        <IconButton
        sx={{
            height: 50,
            width: 50,
            bgcolor: 'secondary.main',
        }}
        >
        <SvgColor
            src="/assets/images/svgs/volume_up.svg"
            sx={{ width: 30, height: 30, color: 'primary.contrastText' }}
        />
        </IconButton>
        <IconButton
            sx={{
                height: 50,
                width: 50,
                bgcolor: 'secondary.main',
            }}
            >
            <SvgColor
                src="/assets/images/svgs/mic.svg"
                sx={{ width: 30, height: 30, color: 'primary.contrastText'}}
            />
        </IconButton>
        <IconButton
            sx={{
                height: 50,
                width: 50,
                border: '2px solid',
                borderColor:'#6AF6FF',
                bgcolor: 'secondary.main'
            }}
            >
            <SvgColor
                src="/assets/images/svgs/hand.svg"
                sx={{
                    color: 'primary.contrastText',
                    width: 30, 
                    height: 30, 
                  }}
                
            />
        </IconButton>
        <IconButton
            sx={{
                height: 50,
                width: 50,
                bgcolor: 'secondary.main',
            }}
        >
        <SvgColor
            src="/assets/images/svgs/more_vert.svg"
            sx={{ width: 30, height: 30, color: 'primary.contrastText' }}
        />
        </IconButton>
    </Stack>
  );
};

export default VoiceChatFooter;
