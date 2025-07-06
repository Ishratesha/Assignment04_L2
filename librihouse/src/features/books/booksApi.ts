import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api/' }),
  tagTypes: ['Books'],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: (args = {}) => {
        const { filter, sortBy, sort, limit } = args;
    
        let queryString = 'books';
        const params = new URLSearchParams();
    
        if (filter) params.append('filter', filter);
        if (sortBy) params.append('sortBy', sortBy);
        if (sort) params.append('sort', sort);
        if (limit) params.append('limit', limit);
    
        if (params.toString()) {
          queryString += `?${params.toString()}`;
        }
    
        return queryString;
      },
      providesTags: ['Books'],
    }),
    getBook: builder.query({
      query: (id) => `books/${id}`,
    }),
    createBook: builder.mutation({
      query: (book) => ({
        url: 'books',
        method: 'POST',
        body: book,
      }),
      invalidatesTags: ['Books'],
    }),
    updateBook: builder.mutation({
      query: ({ id, ...book }) => ({
        url: `books/${id}`,
        method: 'PUT',
        body: book,
      }),
      invalidatesTags: ['Books'],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `books/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Books'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetBookQuery,
  useCreateBookMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
} = booksApi;
