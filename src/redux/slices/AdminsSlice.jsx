import { createSlice } from '@reduxjs/toolkit';

const adminsList = createSlice({
  name: 'admins',
  initialState: [],
  reducers: {
    addAdminsList(state, action) {
      state = action.payload;
    },
  },
});

export const { addAdminsList } = adminsList.actions;

export default adminsList.reducer;
