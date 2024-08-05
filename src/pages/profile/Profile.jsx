import { MainContainer } from '../../components/ui/CommonStyles';
import React, { useCallback, useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material';
import { ProfileInputs } from './Profile.styled';
import useConstants from '../../constants/Constants';
import {
  useGetProfileQuery,
  useSaveChangeProfileMutation,
} from '../../redux/API/ProfileAPI';
import useProfile from '../../hooks/useProfile';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { access_token } = useConstants();
  const { addAdminData } = useProfile();
  const { data } = useGetProfileQuery({ access_token });
  const admin = useSelector((state) => state.profileAdmin?.admin);
  const { id, email, phone } = admin;

  const [emailValue, setEmailValue] = useState({
    value: email || '',
    error: '',
  });
  const [phoneValue, setPhoneValue] = useState({
    value: phone || '',
    error: '',
  });

  const [saveAdmin] = useSaveChangeProfileMutation();

  const handleChangeEmail = useCallback(
    ({ target: { value } }) => setEmailValue((prev) => ({ ...prev, value })),
    []
  );

  const handleChangePhone = useCallback(
    ({ target: { value } }) => setPhoneValue((prev) => ({ ...prev, value })),
    []
  );

  useEffect(() => {
    setEmailValue((prev) => ({ ...prev, value: email || '' }));
    setPhoneValue((prev) => ({ ...prev, value: phone || '' }));

    if (data) {
      addAdminData(data);
    }
  }, [data, addAdminData, email, phone]);

  const handleSubmit = () => {
    saveAdmin({
      access_token,
      admin: {
        id: id,
        ...(email !== emailValue.value && { email: emailValue.value }),
        ...(phone !== phoneValue.value && { phone: phoneValue.value }),
      },
    });
  };

  return (
    <MainContainer
      sx={{ alignItems: 'flex-start', p: '15px' }}
      component="main"
    >
      <ProfileInputs sx={{ width: '100%' }}>
        <TextField value={emailValue.value} onChange={handleChangeEmail} />
      </ProfileInputs>
      <ProfileInputs>
        <TextField value={phoneValue.value} onChange={handleChangePhone} />
      </ProfileInputs>
      <Button
        sx={{ m: 0, bgcolor: 'rgb(245, 0, 87)' }}
        variant={'contained'}
        color={'error'}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </MainContainer>
  );
};

export default Profile;
