import { ChangeEvent, useState } from 'react';
// import Image from 'next/image';
import { FormControlLabel, Checkbox, Divider } from '@mui/material';
import Image from '../../../../components/image';

import { StyledRoot } from '../styles';

export default function NFTSettings() {
  const [checkedVisible, setCheckedVisible] = useState<boolean>(true);
  const [checkedAlert, setCheckedAlert] = useState<boolean>(true);

  const handleChangeVisible = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedVisible(event.target.checked);
  };

  const handleChangeAlert = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedAlert(event.target.checked);
  };

  return (
    <StyledRoot sx={{ py: 2 }}>
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
                sx={{ width: 12, height: 'auto' }}
              />
            }
            checkedIcon={
              <Image
                disabledEffect
                src="/assets/images/auth/checked.svg"
                alt=""
                sx={{ width: 12, height: 'auto' }}
              />
            }
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label="My NFTs are visible to everyone"
      />
      <Divider sx={{ color: 'primary.main', my: 1 }} />
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
                sx={{ width: 12, height: 'auto' }}
              />
            }
            checkedIcon={
              <Image
                disabledEffect
                src="/assets/images/auth/checked.svg"
                alt=""
                sx={{ width: 12, height: 'auto' }}
              />
            }
            inputProps={{ 'aria-label': 'controlled' }}
          />
        }
        label="Be alerted to purchase offers received"
      />
    </StyledRoot>
  );
}
