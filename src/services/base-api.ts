import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateDeckArgs, DecksParams, DecksResponse } from '@/services/decks/types';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  tagTypes: ['Decks'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flashcards.andrii.es',
    credentials: 'include',
    prepareHeaders: headers => {
      headers.append('x-auth-skip', 'true');
    }
  }),
  endpoints: builder => {
    return {
      getDecks: builder.query<DecksResponse, DecksParams | void>({
        query: (args) => ({
          url: 'v2/decks',
          params: args ?? undefined
        }),
        providesTags: ['Decks']
      }),
      createDeck: builder.mutation<void, CreateDeckArgs>({
        query: (args) => ({
          url: 'v1/decks',
          body: args,
          method: 'POST'
        }),
        invalidatesTags: ['Decks']
      })
    };
  }
});

export const { useGetDecksQuery, useCreateDeckMutation } = baseApi;