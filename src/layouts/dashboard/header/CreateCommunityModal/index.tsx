import * as React from 'react';
import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Dialog, DialogTitle, DialogContent, IconButton, Grid } from '@mui/material';
import CreateCommunityModal2 from '../CreateCommunityModal2';
import Iconify from '../../../../components/iconify';
import Image from '../../../../components/image';
import { StyledButton } from './styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Iconify icon="eva:close-fill" />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

interface CreateCommunityModalProps {
  open: boolean;
  handleClose: () => void;
}
const CreateCommunityModal: FC<CreateCommunityModalProps> = ({ open, handleClose }) => {
  const [type, setCreateCommunityType] = React.useState('digital');
  const [openCreateCommunityModal2, setCreateCommunity2Open] = React.useState(false);

  const createWith = (type) => {
    setCreateCommunityType(type);
    setCreateCommunity2Open(true);
    handleClose();
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="create-dialog-dialog-title"
        open={open}
        maxWidth="xl"
        PaperProps={{
          style: {
            backgroundImage: 'linear-gradient(rgba(21,21,21,0.85), rgba(21,21,21,0.85))',
            backgroundColor: 'rgba(0,0,0,0)',
            backdropFilter: 'blur(7.5px)',
          },
        }}
      >
        <BootstrapDialogTitle id="create-dialog-dialog-title" onClose={handleClose} />
        <DialogContent>
          <Grid container spacing={2} sx={{ mt: 10, mb: 10, pl: 5, pr: 5 }}>
            <Grid item xs={4} style={{ textAlign: 'center' }} onClick={() => createWith('digital')}>
              <Image
                src="/assets/images/community-digital-collectibles.png"
                alt="community-digital-collectibles"
                sx={{ width: 90, height: 70 }}
              />
              <StyledButton
                variant="contained"
                sx={{ mt: 2.5 }}
                style={{ justifyContent: 'center' }}
              >
                Digital Collectibles
              </StyledButton>
            </Grid>
            <Grid item xs={4} style={{ textAlign: 'center' }} onClick={() => createWith('crypto')}>
              <Image
                src="/assets/images/community-cryptocurrencies.png"
                alt="community-cryptocurrencies"
                sx={{ width: 70, height: 70 }}
              />
              <StyledButton
                variant="contained"
                sx={{ mt: 2.5 }}
                style={{ justifyContent: 'center' }}
              >
                Cryptocurrencies
              </StyledButton>
            </Grid>
            <Grid item xs={4} style={{ textAlign: 'center' }} onClick={() => createWith('others')}>
              <Image
                src="/assets/images/community-others.png"
                alt="community-others"
                sx={{ width: 80, height: 70 }}
              />
              <StyledButton
                variant="contained"
                sx={{ mt: 2.5 }}
                style={{ justifyContent: 'center' }}
              >
                Others
              </StyledButton>
            </Grid>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
      <CreateCommunityModal2 open={openCreateCommunityModal2} type={type} />
    </div>
  );
};

export default CreateCommunityModal;
