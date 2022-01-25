import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const exchangesHeaders = {
  'x-rapidapi-host': 'deep-ai-crypto-analysis.p.rapidapi.com',
  'x-rapidapi-key': '70b66d9bafmsh2fe3c536de6a3dcp1355cajsnc7c9e1041abf'
};
const createRequest = (url) => ({ url, headers: exchangesHeaders });

export const exchangesApi = createApi({
  reducerPath: 'exchangesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://deep-ai-crypto-analysis.p.rapidapi.com/cryptoanalysis/apiv1' }),
  endpoints: (builder) => ({

    getExchanges: builder.query({
      query: () => createRequest('/exchanges/'),
    }),
  }),
});

export const {
  useGetExchangesQuery,
} = exchangesApi;
