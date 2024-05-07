import { configureStore } from '@reduxjs/toolkit';
import { sessionAPI } from './API/SessionAPI';
import sessionSlice from './slices/SessionSlice';
import { adminsAPI } from './API/AdminsAPI';
import adminsSlice from './slices/AdminsSlice';
import { companiesAPI } from './API/CompaniesAPI';
import CompaniesSlice from './slices/CompaniesSlice';

const store = configureStore({
  reducer: {
    activeSession: sessionSlice,
    [sessionAPI.reducerPath]: sessionAPI.reducer, //my reducer
    [adminsAPI.reducerPath]: adminsAPI.reducer,
    adminsList: adminsSlice,
    [companiesAPI.reducerPath]: companiesAPI.reducer,
    companiesList: CompaniesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sessionAPI.middleware,
      adminsAPI.middleware,
      companiesAPI.middleware
    ),
});

export default store;
