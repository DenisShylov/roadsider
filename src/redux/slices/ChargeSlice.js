import { createSlice } from '@reduxjs/toolkit';

const chargeSlice = createSlice({
  name: 'charges',
  initialState: { all: { charges: [], pagination: [] } },
  reducers: {
    addChargesData(state, action) {
      state.all = action.payload;
    },
  },
});

export const { addChargesData } = chargeSlice.actions;

export default chargeSlice.reducer;
