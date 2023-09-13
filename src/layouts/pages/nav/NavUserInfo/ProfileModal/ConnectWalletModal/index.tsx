import * as React from 'react';
import { ChangeEvent, FC, useState } from 'react';
import { useTheme, styled } from '@mui/material/styles';
import {
  Box,
  Stack,
  Typography,
  Tabs,
  Tab,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControlLabel,
  Checkbox,
  IconButton,
} from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import Iconify from '../../../../../../components/iconify';
import SvgColor from '../../../../../../components/svg-color';
import Image from '../../../../../../components/image';
import { StyledWalletButton } from './styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogTitle-root': {
    padding: theme.spacing(10, 0, 0, 0),
  },
  '& .MuiDialogContent-root': {
    padding: theme.spacing(6, 8),
  },
}));

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs {...props} TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }} />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    width: '100%',
    background: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(18),
    '&.Mui-selected': {
      backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
    },
    '&:not(.Mui-selected)': {
      color: 'white',
    },
  })
);

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`wallet-tabpanel-${index}`}
      aria-labelledby={`wallet-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `wallet-tab-${index}`,
    'aria-controls': `wallet-tabpanel-${index}`,
  };
}

interface ConnectWalletModalProps {
  open: boolean;
  handleClose: () => void;
}

const ConnectWalletModal: FC<ConnectWalletModalProps> = ({ open, handleClose }) => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  const [checkedRemind, setCheckedRemind] = useState<boolean>(true);

  const handleChangeRemind = (event: ChangeEvent<HTMLInputElement>) => {
    setCheckedRemind(event.target.checked);
  };
  return (
    <div>
      <StyledDialog
        onClose={handleClose}
        aria-labelledby="connect-wallet-dialog-title"
        open={open}
        maxWidth="xl"
        PaperProps={{
          style: {
            background: 'rgba(21, 21, 21, 0.85)',
            backdropFilter: 'blur(14px)',
          },
        }}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'primary.contrastText',
          }}
        >
          <Iconify icon="eva:close-fill" />
        </IconButton>
        <DialogTitle typography="h4" sx={{ textAlign: 'center' }} id="connect-wallet-dialog-title">
          Connect Wallet
        </DialogTitle>
        <DialogContent>
          <Stack alignItems="center" justifyContent="center">
            <StyledTabs value={value} onChange={handleChange}>
              <StyledTab label="Ethereum" {...a11yProps(0)} />
              <StyledTab label="Solana" {...a11yProps(1)} />
              <StyledTab label="Polygon" {...a11yProps(2)} />
            </StyledTabs>
            <SwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Stack spacing={3}>
                  <StyledWalletButton
                    startIcon={
                      <Image
                        disabledEffect
                        src="/assets/images/svgs/metamask.svg"
                        alt="Metamask"
                        sx={{ width: 30, height: 30 }}
                      />
                    }
                    endIcon={
                      <IconButton
                        sx={{
                          borderRadius: '15px',
                          height: 45,
                          width: 45,
                        }}
                      >
                        <Image
                          disabledEffect
                          src="/assets/images/svgs/link.svg"
                          alt="link"
                          sx={{ width: 18, height: 18 }}
                        />
                      </IconButton>
                    }
                  >
                    Metamask
                  </StyledWalletButton>
                  <StyledWalletButton
                    startIcon={
                      <Image
                        disabledEffect
                        src="/assets/images/svgs/trustwallet.svg"
                        alt="trustwallet"
                        sx={{ width: 30, height: 30 }}
                      />
                    }
                    endIcon={
                      <IconButton
                        sx={{
                          background: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
                          borderRadius: '15px',
                          height: 45,
                          width: 45,
                        }}
                      >
                        <Image
                          disabledEffect
                          src="/assets/images/svgs/link.svg"
                          alt="link"
                          sx={{
                            width: 18,
                            height: 18,
                          }}
                        />
                      </IconButton>
                    }
                  >
                    Trust Wallet
                  </StyledWalletButton>
                  <StyledWalletButton
                    startIcon={
                      <Image
                        disabledEffect
                        src="/assets/images/svgs/coinbase.svg"
                        alt="coinbase"
                        sx={{ width: 30, height: 30 }}
                      />
                    }
                    endIcon={
                      <IconButton
                        sx={{
                          borderRadius: '15px',
                          height: 45,
                          width: 45,
                        }}
                      >
                        <Image
                          disabledEffect
                          src="/assets/images/svgs/link.svg"
                          alt="link"
                          sx={{ width: 18, height: 18 }}
                        />
                      </IconButton>
                    }
                  >
                    Coinbase Wallet
                  </StyledWalletButton>
                </Stack>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                Solana Wallets comming soon...
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                Polygon Wallets comming soon...
              </TabPanel>
            </SwipeableViews>
            <FormControlLabel
              sx={{
                '& .MuiFormControlLabel-label': {
                  backgroundImage: 'linear-gradient(85.95deg, #6AF6FF 5.01%, #E140E4 96.48%)',
                  WebkitBackgroundClip: 'text',
                  color: 'transparent',
                  fontSize: '15px',
                  lineHeight: 1,
                  fontWeight: 600,
                },
              }}
              control={
                <Checkbox
                  checked={checkedRemind}
                  onChange={handleChangeRemind}
                  icon={
                    <Image
                      disabledEffect
                      src="/assets/images/auth/unchecked.svg"
                      alt=""
                      sx={{ width: 'auto', height: 14 }}
                    />
                  }
                  checkedIcon={
                    <Image
                      disabledEffect
                      src="/assets/images/auth/checked.svg"
                      alt=""
                      sx={{ width: 'auto', height: 14 }}
                    />
                  }
                  inputProps={{ 'aria-label': 'controlled' }}
                />
              }
              label="Remind me later"
            />

            <Typography variant="caption" sx={{ color: '#565A7F', textAlign: 'center' }} my={3}>
              Read-only access is given to verify the token holding of the wallet that is available
              on the blockchain.
              <br />
              This does not give Biples access to your funds or the power to act on your behalf.
            </Typography>

            <Stack
              spacing={1}
              alignItems="center"
              px={3}
              py={2}
              sx={{
                borderRadius: '15px',
                bgcolor: 'primary.main',
              }}
            >
              <SvgColor
                src="/assets/images/svgs/quiz.svg"
                sx={{
                  width: 18,
                  height: 18,
                  color: '#fff',
                }}
              />
              <Typography
                sx={{
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                How to create a wallet?
              </Typography>
            </Stack>
          </Stack>
        </DialogContent>
      </StyledDialog>
    </div>
  );
};

export default ConnectWalletModal;
