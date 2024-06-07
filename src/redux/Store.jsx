import { configureStore } from '@reduxjs/toolkit';
import { sessionAPI } from './API/SessionAPI';
import sessionSlice from './slices/SessionSlice';
import { adminsAPI } from './API/AdminsAPI';
import adminsSlice from './slices/AdminsSlice';
import { companiesAPI } from './API/CompaniesAPI';
import CompaniesSlice from './slices/CompaniesSlice';
import { insuranceAccAPI } from './API/InsuranceAccAPI';
import InsuranceAccountsSlice from './slices/InsuranceAccountsSlice';

const store = configureStore({
  reducer: {
    [sessionAPI.reducerPath]: sessionAPI.reducer, //my reducer
    activeSession: sessionSlice,
    [adminsAPI.reducerPath]: adminsAPI.reducer,
    adminsList: adminsSlice,
    [companiesAPI.reducerPath]: companiesAPI.reducer,
    companiesList: CompaniesSlice,
    [insuranceAccAPI.reducerPath]: insuranceAccAPI.reducer,
    insuranceList: InsuranceAccountsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      sessionAPI.middleware,
      adminsAPI.middleware,
      companiesAPI.middleware,
      insuranceAccAPI.middleware
    ),
});

export default store;
