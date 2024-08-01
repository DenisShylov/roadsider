import { createSlice } from '@reduxjs/toolkit';

export const companiesSlice = createSlice({
  name: 'companiesData',
  initialState: {
    all: { companies: [], pagination: {} },
    company: { id: '', locations: '', name: '' },
  },
  reducers: {
    addCompaniesData(state, action) {
      state.all = action.payload;
      console.log(state);
      console.log(action.payload);
    },
  },
});

export const { addCompaniesData } = companiesSlice.actions;

export default companiesSlice.reducer;
