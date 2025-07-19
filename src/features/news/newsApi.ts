import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Post {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
}

interface PostsResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export const newsApi = createApi({
  reducerPath: 'newsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query<PostsResponse, number>({
      query: (skip) => `posts?limit=10&skip=${skip}`,
      serializeQueryArgs: ({ endpointName }) => endpointName,
      merge: (currentCache: PostsResponse, newItems: PostsResponse) => {
        currentCache.posts.push(...newItems.posts);
        currentCache.total = newItems.total;
      },
      forceRefetch: ({ currentArg, previousArg }) => currentArg !== previousArg,
    }),
  }),
});

export const { useGetPostsQuery } = newsApi;