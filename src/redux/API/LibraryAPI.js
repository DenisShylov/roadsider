import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Local files
import { SerializedQs } from './Index';

const paramsServices = {
  limit: 25,
  offset: 0,
  orders: { name: 'asc' },
  attributes: [
    'id',
    'name',
    'service_type',
    {
      default_charges: [
        'id',
        'basic_rate_type',
        { charge: ['id', 'name', 'basic_rate_type'] },
      ],
    },
  ],
};

const paramsCharges = {
  limit: 25,
  offset: 0,
  orders: { name: 'asc' },
  atributes: ['id', 'name', 'charge_type', 'basic_rate_types', 'mile_type'],
};

const paramsTypes = {
  limit: 25,
  offset: 0,
  orders: { name: 'asc' },
  atributes: ['id', 'name'],
};
export const libraryAPI = createApi({
  reducerPath: 'library',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    paramsSerializer: (params) => SerializedQs(params),
  }),

  endpoints: (build) => ({
    getServicesBasic: build.query({
      query: ({ access_token, service_type }) => {
        return {
          url: 'services',
          params: { ...paramsServices, access_token, service_type },
        };
      },
    }),
    getCharges: build.query({
      query: ({ access_token, charge_type }) => {
        return {
          url: 'charges',
          params: { ...paramsCharges, access_token, charge_type },
        };
      },
    }),
    getTypes: build.query({
      query: ({ access_token }) => {
        return {
          url: 'types',
          params: { ...paramsTypes, access_token },
        };
      },
    }),
  }),
});

export const {
  useGetServicesBasicQuery,
  useLazyGetChargesQuery,
  useLazyGetTypesQuery,
} = libraryAPI;
