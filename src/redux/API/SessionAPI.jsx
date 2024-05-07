import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const sessionAPI = createApi({
  reducerPath: 'session',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),

  endpoints: (build) => ({
    createSessionApi: build.mutation({
      query: (body) => ({ url: 'sessions', method: 'POST', body }),
      invalidatesTags: [{ type: 'Authenticated', id: 'Auth' }],
    }),

    deleteSessionApi: build.mutation({
      query: (token) => ({
        url: `sessions?access_token=${token}`,
        method: 'DELETE',
        token,
      }),
      invalidatesTags: [{ type: 'Authenticated', id: 'Auth' }],
    }),
  }),
});

export const { useCreateSessionApiMutation, useDeleteSessionApiMutation } =
  sessionAPI;
