import { createSlice } from '@reduxjs/toolkit';

const serviceSlice = createSlice({
  name: 'services',
  initialState: { all: { services: [], pagination: [] } },
  reducers: {
    addServiceData(state, action) {
      state.all = action.payload;
    },
  },
});

export const { addServiceData } = serviceSlice.actions;

export default serviceSlice.reducer;
