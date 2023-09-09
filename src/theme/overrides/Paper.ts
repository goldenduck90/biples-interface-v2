import { Theme } from '@mui/material/styles';

// ----------------------------------------------------------------------

export default function Paper(theme: Theme) {
  return {
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          background: theme.palette.secondary.main,
          backdropFilter: 'blur(12.5px)',
        },
      },
    },
  };
}
