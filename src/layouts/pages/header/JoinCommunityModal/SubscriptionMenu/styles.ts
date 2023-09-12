import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  width: '35px',
  height: '35px',
  borderRadius: '8px',
  background: theme.palette.primary.main,
  backdropFilter: 'blur(2.5px)',
}));
