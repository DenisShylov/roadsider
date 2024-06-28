import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'usersData',
  initialState: { all: { users: [], pagination: {} } },
  reducers: {
    usersList(state, action) {
      state.all = action.payload;
    },
  },
});

export const { usersList } = usersSlice.actions;

export default usersSlice.reducer;
