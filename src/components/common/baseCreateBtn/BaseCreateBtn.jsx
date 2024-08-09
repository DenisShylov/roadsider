import React from 'react';
import { CreateBtn, CreateBtnContainer } from './BaseCreateBtn.styled';
import BaseDrawer from '../baseDrawer/BaseDrawer';
import useApp from '../../../hooks/useApp';
import { useSelector } from 'react-redux';

const BaseCreateBtn = ({ reason }) => {
  const { openAppDrawer } = useApp();
  const open = useSelector((state) => state.app[reason]?.formDrawer?.open);

  // const [openDrawer, setOpenDrawer] = useState(false);
  const handleToggleDrawer = () => openAppDrawer({ open: !open, reason });
  return (
    <>
      <CreateBtnContainer>
        <CreateBtn variant="contained" onClick={handleToggleDrawer}>
          Create
        </CreateBtn>
      </CreateBtnContainer>
      <BaseDrawer open={open} onClose={handleToggleDrawer} />
    </>
  );
};

export default BaseCreateBtn;
