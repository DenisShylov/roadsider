import { createSlice } from '@reduxjs/toolkit';

const adminsData = createSlice({
  name: 'adminsData',
  initialState: { all: { data: [] }, admin: { id: '', email: '' } },
  reducers: {
    addAdminsList(state, action) {
      state.all.data = action.payload?.admins;
      console.log(state);
      console.log(action.payload);
    },
  },
});

export const { addAdminsList } = adminsData.actions;

export default adminsData.reducer;
