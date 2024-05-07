import React from 'react';
import { CreateBtn, CreateBtnContainer } from './BaseCreateBtn.styled';

const BaseCreateBtn = () => {
  return (
    <CreateBtnContainer>
      <CreateBtn variant="contained"> Create</CreateBtn>;
    </CreateBtnContainer>
  );
};

export default BaseCreateBtn;
