import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Local files
import { SerializedQs } from './Index';

const params = {
  orders: { created_at: 'desc' },
  limit: 25,
  offset: 0,
  attributes: ['id', 'text', 'dispatch_type', 'validation_errors'],
};
export const dispathesAPI = createApi({
  reducerPath: 'dispatches',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    paramsSerializer: (params) => SerializedQs(params),
  }),

  endpoints: (build) => ({
    getDispatches: build.query({
      query: ({
        access_token,
        dispatch_type,
        query,
        with_validation_errors,
      }) => {
        return {
          url: 'dispatches',
          params: {
            access_token,
            with_validation_errors,
            dispatch_type,
            ...params,
            ...(!!query && { query }),
          },
        };
      },
    }),
  }),
});

export const { useGetDispatchesQuery, useLazyGetDispatchesQuery } =
  dispathesAPI;
