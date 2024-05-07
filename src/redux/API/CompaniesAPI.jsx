import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const companiesAPI = createApi({
  reducerPath: 'companies',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),

  endpoints: (build) => ({
    getCompanies: build.query({
      query: (body) =>
        console.log(body) ||
        `companies?access_token=${body.access_token}&limit=25&offset=0&orders[name]=asc&attributes[]=id&attributes[]=locations&attributes[]=name&attributes[]=time_zone&attributes[]=commission_value&attributes[]=mileage_calculation&attributes[]=stripe_account_id&attributes[]=stripe_charges_enabled&attributes[]=subscription_expired_at`,
    }),
  }),
});

export const { useGetCompaniesQuery } = companiesAPI;
