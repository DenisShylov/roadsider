import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
  name: 'sessionData',
  initialState: { session: { id: '', platform_type: '', access_token: '' } },
  reducers: {
    createSession(state, action) {
      state.session = action.payload?.session;
    },
  },
});

export const { createSession } = sessionSlice.actions;

export default sessionSlice.reducer;
