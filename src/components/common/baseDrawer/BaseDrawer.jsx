import { Button, Drawer } from '@mui/material';
import React from 'react';

const BaseDrawer = ({ open = false, onClose }) => {
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <Drawer
      anchor={'right'}
      open={open}
      children={<Button onClick={onClose}>Cancel</Button>}
    />
  );
};

export default BaseDrawer;
