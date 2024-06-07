import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SerializedQs } from './Index';

export const adminsAPI = createApi({
  reducerPath: 'admins',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    paramsSerializer: (params) => SerializedQs(params),
  }),

  endpoints: (build) => ({
    getAdminsListApi: build.query({
      query: (args) => {
        const { attributes } = args;
        console.log(args);
        return {
          url: 'admins',
          params: attributes,
        };
      },
      // `admins?access_token=${body.access_token}&limit=25&offset=0&orders[email]=asc&attributes[]=id&attributes[]=email`,
    }),
  }),
});

export const { useGetAdminsListApiQuery } = adminsAPI;
