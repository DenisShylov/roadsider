import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SerializedQs } from './Index';

export const insuranceAccAPI = createApi({
  reducerPath: 'insurance_accounts',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    paramsSerializer: (params) => SerializedQs(params),
  }),
  endpoints: (build) => ({
    getInsuranseAcc: build.query({
      query: (args) => {
        const { attributes } = args;
        console.log(args);
        return {
          url: 'insurance_accounts',
          params: args,
        };
      },
    }),
  }),
});

export const { useGetInsuranseAccQuery } = insuranceAccAPI;
