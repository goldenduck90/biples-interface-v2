// @mui
// eslint-disable-next-line import/no-extraneous-dependencies
import { Stack, Divider } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';


import VoiceChatPersonItem from './VoiceChatPersonItem';
import VoiceChatPersonItem4 from './VoiceChatPersonItem4';


// config

import VoiceChatPersonHeader from './VoiceChatPersonHeader'
import VoiceChatFooter from './VoiceChatFooter';

interface PersonItemProps {
  length: number;
}

export default function VoiceChatPerson(props:PersonItemProps) {
 const {length} = props;
  return (
    <>
      {length<3? (<VoiceChatPersonHeader count/>
        ) : (<VoiceChatPersonHeader count={false}/>
      )}
      <Divider sx={{ mb: 3 }} />
      <Stack sx={{ margin: 10 }}>
        <Grid container spacing={4} justifyContent="center">
          {Array.from({ length }).map((_, index) => (
            <Grid 
              key={index} 
              xl={length < 5 ? 6 : 3} 
              sx={{ position: 'relative' }}>
              {length < 4 ? (<VoiceChatPersonItem active={false} />
                ) : (
              <VoiceChatPersonItem4 active={false} />
              )}
            </Grid>
          ))}
        </Grid>
      </Stack>
      <Divider sx={{ mt: 3 }} />
      <VoiceChatFooter/>
    </>
  );
}

// // Add prop validation
// VoiceChatPerson.propTypes = {
//   length: PropTypes.number.isRequired,
// };