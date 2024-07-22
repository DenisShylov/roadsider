import { createSlice } from '@reduxjs/toolkit';

const init = {
  admin: {
    detailsDrawer: { open: false },
    formDrawer: { edit: false, open: false },
    id: '',
  },

  basicCharge: {
    detailsDrawer: { open: false },
    formDrawer: { edit: false, open: false },
    id: '',
  },
  // feeCharge: {
  //   detailsDrawer: { open: false },
  //   formDrawer: { edit: false, open: false },
  //   id: '',
  // },
  // company: {
  //   detailsDrawer: { open: false },
  //   formDrawer: { edit: false, open: false },
  //   id: '',
  // },
  // digital_dispatch_insurance_account: {
  //   detailsDrawer: { open: false },
  //   formDrawer: { edit: false, open: false },
  //   id: '',
  // },
  // urgently_insurance_account: {
  //   detailsDrawer: { open: false },
  //   formDrawer: { edit: false, open: false },
  //   id: '',
  // },
  // dispatch: {
  //   detailsDrawer: { open: false },
  //   formDrawer: { edit: false, open: false },
  //   id: '',
  // },
  // service: {
  //   detailsDrawer: { open: false },
  //   formDrawer: { edit: false, open: false },
  //   id: '',
  // },
  // type: {
  //   detailsDrawer: { open: false },
  //   formDrawer: { edit: false, open: false },
  //   id: '',
  // },
  // user: {
  //   detailsDrawer: { open: false },
  //   formDrawer: { edit: false, open: false },
  //   id: '',
  // },
};
export const appSlice = createSlice({
  name: 'App',
  initialState: init,
  reducers: {
    openDrawer(state, action) {
      const { open, reson } = action.payload;
      // if(reson)
      console.log('OPEN_DRAWER', action.payload);
      state.formDrawer.open = action.payload;
    },
  },
});

export const { openDrawer } = appSlice.actions;
export default appSlice.reducer;
