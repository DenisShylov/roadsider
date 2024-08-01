import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const twoFactorAuthAPI = createApi({
  reducerPath: 'twoFactor',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),

  endpoints: (build) => ({
    postTwoFactor: build.mutation({
      query: (emailPassword) => ({
        url: 'confirmations/two_factor',
        method: 'POST',
        body: { ...emailPassword },
      }),
      invalidatesTags: [{ type: 'twoFactorAuth', id: 'auth' }],
    }),
  }),
});

export const { usePostTwoFactorMutation } = twoFactorAuthAPI;
