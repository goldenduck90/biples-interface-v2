import { useState } from 'react';
import {
  FormControl,
  IconButton,
  Select,
  SelectChangeEvent,
  MenuItem,
  Unstable_Grid2 as Grid,
  Stack,
  Divider,
  Typography,
} from '@mui/material';
import SvgColor from '../../../../components/svg-color';
import Image from '../../../../components/image';
import { StyledRoot } from './styles';

export default function NavNFT() {
  const [filter, setFilter] = useState('mine');
  const [openCollectionModal, setOpenCollectionModal] = useState(false);

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  const handleOpenCollectionModal = () => {
    setOpenCollectionModal(true);
  };

  const handleCloseCollectionModal = () => {
    setOpenCollectionModal(false);
  };

  return (
    <StyledRoot sx={{ py: 2 }}>
      <Stack direction="row" justifyContent="space-between" pb={2}>
        <FormControl sx={{ minWidth: 200 }}>
          <Select
            value={filter}
            size="small"
            onChange={handleChange}
            sx={{
              bgcolor: 'secondary.main',
              borderRadius: '10px',
            }}
          >
            <MenuItem value="mine">My NFTs</MenuItem>
            <Divider sx={{ bgcolor: 'primary.main' }} />
            <MenuItem value="all">All NFTs</MenuItem>
          </Select>
        </FormControl>

        <IconButton
          aria-label="refresh"
          sx={{
            width: 40,
            height: 40,
            bgcolor: 'secondary.main',
            borderRadius: '10px',
            border: 'none',
          }}
        >
          <SvgColor
            src="/assets/images/svgs/refresh.svg"
            sx={{
              width: 18,
              height: 18,
              background: 'linear-gradient(92.74deg, #FA15FF 12.91%, #4079E4 105.44%)',
            }}
          />
        </IconButton>
      </Stack>
      <Grid container spacing={1}>
        {Array.from(Array(8)).map((_, index) => (
          <Grid key={index} xs={4} sx={{ position: 'relative' }}>
            <Image
              src={`/assets/images/${index + 1}.png`}
              alt=""
              sx={{
                width: 83,
                height: 83,
                borderRadius: '10px',
              }}
            />
          </Grid>
        ))}
        <Grid xs={4} sx={{ position: 'relative' }}>
          <Image
            src="/assets/images/9.png"
            alt=""
            sx={{
              width: 83,
              height: 83,
              borderRadius: '10px',
              zIndex: 10,
            }}
          />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            spacing={1}
            sx={{
              position: 'absolute',
              bottom: 4,
              right: 1,
              borderRadius: '8px',
              zIndex: 11,
              width: 83,
              height: 83,
              background: 'rgba(0, 0, 0, 0.75)',
              backdropFilter: 'blur(10px)',
              cursor: 'pointer',
            }}
            onClick={handleOpenCollectionModal}
          >
            <Typography variant="caption">See All</Typography>
            <SvgColor
              src="/assets/images/svgs/right_arrow.svg"
              sx={{
                width: 12,
                height: 12,
                background: 'primary.contrastText',
              }}
            />
          </Stack>
        </Grid>
      </Grid>
    </StyledRoot>
  );
}
