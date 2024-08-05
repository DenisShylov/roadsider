import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Local files
import { SerializedQs } from './Index';

const params = {
  attributes: ['id', 'email', 'phone'],
};

export const profileAPI = createApi({
  reducerPath: 'profile',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    paramsSerializer: (params) => SerializedQs(params),
  }),

  endpoints: (build) => ({
    getProfile: build.query({
      query: ({ access_token }) => {
        return {
          url: `profile`,
          params: { access_token, ...params },
        };
      },
    }),
    saveChangeProfile: build.mutation({
      query: ({ access_token, admin }) => {
        return {
          url: 'profile',
          method: 'PATCH',
          body: { access_token, admin },
        };
      },
    }),
  }),
});

export const { useGetProfileQuery, useSaveChangeProfileMutation } = profileAPI;
