import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dispatch: { dispatches: [], pagination: {} },
};
export const dispatchesSlice = createSlice({
  name: 'dispatchesData',
  initialState,
  reducers: {
    addDispatchesData(state, action) {
      console.log('STATE_DISPATCH', state);
      state.dispatch = action.payload;
    },
  },
});

export const { addDispatchesData } = dispatchesSlice.actions;

export default dispatchesSlice.reducer;
