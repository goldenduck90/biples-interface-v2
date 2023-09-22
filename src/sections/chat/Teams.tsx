import { Stack, Unstable_Grid2 as Grid, useMediaQuery } from '@mui/material';
import { Theme } from '@mui/material/styles';
import Scrollbar from '../../components/scrollbar';
import TeamItem from './TeamItem';
import { HEADER } from '../../config-global';


export default function Teams() {
  const isSmallScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const numCards = isSmallScreen ? 1: 3;

  return (
    <Stack sx={{ height: `calc(100vh - ${HEADER.H_HOME_DESKTOP + 96 + 48}px)`}}>
      <Scrollbar
        sx={{
          m:5,
          pt:1,
          pb:5,
        }}
      >
        <Grid container spacing={4}>
          {Array.from(Array(22)).map((_, index) => (
            <Grid key={index} xs={12/numCards} sx={{ position: 'relative' }}>
              <TeamItem  />
            </Grid>
          ))}
        </Grid>
      </Scrollbar>
    </Stack>
  );
}