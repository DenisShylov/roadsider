import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminsAPI = createApi({
  reducerPath: 'admins',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),

  endpoints: (build) => ({
    getAdminsListApi: build.query({
      query: (body) =>
        `admins?access_token=${body.access_token}&limit=25&offset=0&orders[email]=asc&attributes[]=id&attributes[]=email`,
    }),
  }),
});

export const { useGetAdminsListApiQuery } = adminsAPI;
