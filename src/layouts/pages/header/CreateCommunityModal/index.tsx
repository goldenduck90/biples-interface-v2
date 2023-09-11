import * as React from 'react';
import { FC } from 'react';
import { styled } from '@mui/material/styles';
import { Dialog, DialogContent, IconButton, Stack } from '@mui/material';
import CreateCommunityDetailModal from '../CreateCommunityDetailModal';
import Iconify from '../../../../components/iconify';
import Image from '../../../../components/image';
import { StyledButton } from './styles';

const StyledDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(16, 12),
  },
}));

interface CreateCommunityModalProps {
  open: boolean;
  handleClose: () => void;
}
const CreateCommunityModal: FC<CreateCommunityModalProps> = ({ open, handleClose }) => {
  const [communityType, setCommunityType] = React.useState('digital');
  const [openDetailModal, setDetailModalOpen] = React.useState(false);

  const handleCloseDetailModal = () => {
    setDetailModalOpen(false);
  };

  const handleCreate = (option: string) => {
    setCommunityType(option);
    setDetailModalOpen(true);
    handleClose();
  };

  return (
    <div>
      <StyledDialog
        onClose={handleClose}
        aria-labelledby="create-community-dialog-title"
        open={open}
        maxWidth="xl"
        PaperProps={{
          style: {
            background: 'rgba(21, 21, 21, 0.85)',
            backdropFilter: 'blur(7.5px)',
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
        <DialogContent>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={3}>
            <Stack alignItems="center" onClick={() => handleCreate('digital')}>
              <Image
                disabledEffect
                src="/assets/images/community-digital-collectibles.png"
                alt="community-digital-collectibles"
                sx={{ width: 'auto', height: 70 }}
              />
              <StyledButton variant="contained" sx={{ mt: 3, width: 245 }}>
                Digital Collectibles
              </StyledButton>
            </Stack>
            <Stack alignItems="center" onClick={() => handleCreate('crypto')}>
              <Image
                src="/assets/images/community-cryptocurrencies.png"
                alt="community-cryptocurrencies"
                sx={{ width: 'auto', height: 70 }}
              />
              <StyledButton variant="contained" sx={{ mt: 3, width: 245 }}>
                Cryptocurrencies
              </StyledButton>
            </Stack>
            <Stack alignItems="center" onClick={() => handleCreate('others')}>
              <Image
                src="/assets/images/community-others.png"
                alt="community-others"
                sx={{ width: 'auto', height: 70 }}
              />
              <StyledButton variant="contained" sx={{ mt: 3, width: 245 }}>
                Others
              </StyledButton>
            </Stack>
          </Stack>
        </DialogContent>
      </StyledDialog>
      <CreateCommunityDetailModal
        open={openDetailModal}
        option={communityType}
        handleClose={handleCloseDetailModal}
      />
    </div>
  );
};

export default CreateCommunityModal;
