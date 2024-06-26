import { createSlice } from '@reduxjs/toolkit';

const InsuranceAccountsSlice = createSlice({
  name: 'insuranceAccountsData',
  initialState: { all: { data: [], pagination: [] } },
  reducers: {
    addInsuranceAccountsData(state, action) {
      state.all.data = action.payload?.insurance_accounts;
      state.all.pagination = action.payload?.pagination;
    },
  },
});

export const { addInsuranceAccountsData } = InsuranceAccountsSlice.actions;

export default InsuranceAccountsSlice.reducer;
