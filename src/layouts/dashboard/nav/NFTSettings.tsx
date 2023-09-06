import { ChangeEvent, FC, useState } from 'react';
import { FormGroup, FormControlLabel, Checkbox, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { StyledRoot } from './styles';
import Image from '../../../components/image';

const NFTSettings: FC = () => {
  const theme = useTheme();
  const [checkedVisible, setCheckedVisible] = useState<boolean>(true);
  const [checkedAlert, setCheckedAlert] = useState<boolean>(true);

  const handleChangeVisible = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedVisible(event.target.checked);
  };

  const handleChangeAlert = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedAlert(event.target.checked);
  };

  return (
    <StyledRoot>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedVisible}
              onChange={handleChangeVisible}
              icon={
                <Image
                  disabledEffect
                  src="/assets/images/auth/unchecked.svg"
                  alt=""
                  sx={{ width: 12, height: 12 }}
                />
              }
              checkedIcon={
                <Image
                  disabledEffect
                  src="/assets/images/auth/checked.svg"
                  alt=""
                  sx={{ width: 12, height: 12 }}
                />
              }
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="My NFTs are visible to everyone"
          sx={{ color: theme.palette.primary.contrastText, py: 1 }}
        />
        <Divider
          sx={{
            color: theme.palette.mode === 'dark' ? 'rgba(104, 104, 104, 0.22)' : '#565A7F',
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={checkedAlert}
              onChange={handleChangeAlert}
              icon={
                <Image
                  disabledEffect
                  src="/assets/images/auth/unchecked.svg"
                  alt=""
                  sx={{ width: 12, height: 12 }}
                />
              }
              checkedIcon={
                <Image
                  disabledEffect
                  src="/assets/images/auth/checked.svg"
                  alt=""
                  sx={{ width: 12, height: 12 }}
                />
              }
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          label="Be alerted to purchase offers received"
          sx={{ color: theme.palette.primary.contrastText, py: 1 }}
        />
      </FormGroup>
    </StyledRoot>
  );
};

export default NFTSettings;
