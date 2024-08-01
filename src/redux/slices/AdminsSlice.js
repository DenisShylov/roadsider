import { createSlice } from '@reduxjs/toolkit';

const adminsData = createSlice({
  name: 'adminsData',
  initialState: {
    all: { admins: [], pagination: [] },
    admin: { id: '', email: '' },
  },
  reducers: {
    addAdminsList(state, action) {
      state.all = action.payload;
    },
  },
});

export const { addAdminsList } = adminsData.actions;

export default adminsData.reducer;
