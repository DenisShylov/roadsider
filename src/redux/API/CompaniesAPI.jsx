import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Local files
import { SerializedQs } from './Index';

const params = {
  orders: { name: 'asc' },
  limit: 25,
  attributes: [
    'id',
    'locations',
    'name',
    'time_zone',
    'commission_value',
    'mileage_calculation',
    'stripe_account_id',
    'stripe_charges_enabled',
    'subscription_expired_at',
  ],
};
export const companiesAPI = createApi({
  reducerPath: 'companies',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    paramsSerializer: (params) => SerializedQs(params),
  }),

  endpoints: (build) => ({
    getCompanies: build.query({
      query: (args) => {
        const { token, offset, query } = args;

        if (query && query !== 'All Companies') {
          return {
            url: `companies`,
            params: { access_token: token, offset, query, ...params },
          };
        }
        return {
          url: `companies`,
          params: { access_token: token, offset, ...params },
        };
      },
    }),
  }),
});

export const { useGetCompaniesQuery, useLazyGetCompaniesQuery } = companiesAPI;
