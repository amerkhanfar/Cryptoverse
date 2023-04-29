/* eslint-disable quotes */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoNewsHeaders = {
  "content-type": "application/octet-stream",
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "053904cdc4msh6082ce95e6f01e4p16a46bjsnba458623ea3d",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: cryptoNewsHeaders });

export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_NEWS_API_URL }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ newsCategory, count }) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        createRequest(
          `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`,
        ),
    }),
  }),
});

export const { useGetCryptoNewsQuery } = cryptoNewsApi;
