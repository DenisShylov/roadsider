import { createSlice } from '@reduxjs/toolkit';

const typesSlice = createSlice({
  name: 'types',
  initialState: { all: { types: [], pagination: [] } },
  reducers: {
    addTypesData(state, action) {
      state.all = action.payload;
    },
  },
});

export const { addTypesData } = typesSlice.actions;

export default typesSlice.reducer;
