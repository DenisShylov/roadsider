import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin: {
    id: '',
    email: '',
    phone: '',
  },
};

export const profileSlice = createSlice({
  name: 'Profile',
  initialState,
  reducers: {
    profileData(state, action) {
      state.admin = action.payload.admin;
    },
  },
});

export const { profileData } = profileSlice.actions;
export default profileSlice.reducer;
