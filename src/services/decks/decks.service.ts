import { baseApi } from '@/services/base-api';
import { CreateDeckArgs, DecksParams, DecksResponse, DeleteDeckArgs } from './types';

export const decksService = baseApi.injectEndpoints({
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
      }),
      deleteDeck: builder.mutation<void, DeleteDeckArgs>({
        query: (args) => ({
          url: `/v1/decks/${args.id}`,
          method: 'DELETE'
        }),
        invalidatesTags: ['Decks']
      })
    };
  }
});

export const { useGetDecksQuery, useCreateDeckMutation, useDeleteDeckMutation } = decksService;