import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { REHYDRATE } from 'redux-persist';

// const isHydrateAction = (action) => action.type === REHYDRATE;

const sessionBody = {
  session: { platform_type: 'web' },
  attributes: ['id', 'access_token'],
};

export const sessionAPI = createApi({
  reducerPath: 'session',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  // extractRehydrationInfo(action, { reducerPath }) {
  //   if (isHydrateAction(action)) {
  //     // When persisting the root reducer
  //     return action.payload[sessionAPI.reducerPath];
  //   }
  // },
  endpoints: (build) => ({
    createSessionApi: build.mutation({
      query: (data) => ({
        url: 'sessions',
        method: 'POST',
        body: { ...sessionBody, ...data },
      }),
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
