import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import type { Post } from "../types/post";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => `posts`,
    }),
    getPostById: builder.query<Post, string | number>({
      query: (id) => `posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi;
