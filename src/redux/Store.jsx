import { configureStore } from '@reduxjs/toolkit';
import { sessionAPI } from './API/SessionAPI';
import sessionSlice from './slices/SessionSlice';
import { adminsAPI } from './API/AdminsAPI';
import adminsSlice from './slices/AdminsSlice';

const store = configureStore({
  reducer: {
    activeSession: sessionSlice,
    [sessionAPI.reducerPath]: sessionAPI.reducer, //my reducer
    [adminsAPI.reducerPath]: adminsAPI.reducer,
    adminsList: adminsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sessionAPI.middleware, adminsAPI.middleware),
});

export default store;
