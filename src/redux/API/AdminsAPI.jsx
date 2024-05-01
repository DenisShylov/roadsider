import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const adminsAPI = createApi({
  reducerPath: 'admins',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}` }),

  endpoints: (build) => ({
    getAdminsListApi: build.query({
      query: (body) => ({
        url: `admins?access_token=${body.access_token}&limit=${body.limit}&offset=${body.offset}&orders[email]=asc&attributes[]=id&attributes[]=email`,
      }),
    }),
  }),
});

export const { useGetAdminsListApiQuery } = adminsAPI;
