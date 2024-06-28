import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { sessionAPI } from './API/SessionAPI';
import sessionSlice from './slices/SessionSlice';
import { adminsAPI } from './API/AdminsAPI';
import adminsSlice from './slices/AdminsSlice';
import { companiesAPI } from './API/CompaniesAPI';
import CompaniesSlice from './slices/CompaniesSlice';
import { insuranceAccAPI } from './API/InsuranceAccAPI';
import InsuranceAccountsSlice from './slices/InsuranceAccountsSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { usersAPI } from './API/UsersAPI';
import usersSlice from './slices/UsersSlice';

const persistConfig = {
  key: 'session',
  storage,
  blacklist: [
    sessionAPI.reducerPath,
    adminsAPI.reducerPath,
    companiesAPI.reducerPath,
    insuranceAccAPI.reducerPath,
    usersAPI.reducerPath,
  ],
};

const rootReducer = combineReducers({
  [sessionAPI.reducerPath]: sessionAPI.reducer,
  activeSession: sessionSlice,
  [adminsAPI.reducerPath]: adminsAPI.reducer,
  adminsList: adminsSlice,
  [companiesAPI.reducerPath]: companiesAPI.reducer,
  companiesList: CompaniesSlice,
  [insuranceAccAPI.reducerPath]: insuranceAccAPI.reducer,
  insuranceList: InsuranceAccountsSlice,
  [usersAPI.reducerPath]: usersAPI.reducer,
  usersList: usersSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      sessionAPI.middleware,
      adminsAPI.middleware,
      companiesAPI.middleware,
      insuranceAccAPI.middleware,
      usersAPI.middleware
    ),
});

export const persistor = persistStore(store);
export default store;
