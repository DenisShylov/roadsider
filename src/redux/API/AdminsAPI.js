import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SerializedQs } from './Index';

const adminsParams = {
  limit: 25,
  orders: { email: 'asc' },
  attributes: ['id', 'email'],
};
export const adminsAPI = createApi({
  reducerPath: 'admins',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    paramsSerializer: (params) => SerializedQs(params),
  }),

  endpoints: (build) => ({
    getAdminsListApi: build.query({
      query: (args) => {
        const { token, offset } = args;

        return {
          url: 'admins',
          params: { access_token: token, offset, ...adminsParams },
        };
      },
    }),
  }),
});

export const { useGetAdminsListApiQuery } = adminsAPI;
