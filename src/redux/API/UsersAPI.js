import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SerializedQs } from './Index';

const params = {
  orders: { created_at: 'desc' },
  limit: 25,

  // offset: 0,
  attributes: [
    'id',
    'first_name',
    'last_name',
    'email',
    'roles',
    { photo: ['id', 'representations'] },
  ],
};

export const usersAPI = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    paramsSerializer: (params) => SerializedQs(params),
  }),

  endpoints: (build) => ({
    getUsers: build.query({
      query: (args) => {
        const { token, offset, query, roles, company_id } = args;

        return {
          url: 'users',
          params: {
            access_token: token,
            ...(!!query && { query }),
            ...(!!roles && { roles }),
            ...(company_id && { company_id }),
            offset,
            ...params,
          },
        };
      },
    }),
  }),
});

export const { useLazyGetUsersQuery, useGetUsersQuery } = usersAPI;
