import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryConfig } from "../../../shared/api/api";
import { getToken } from '../../Admin/admin.models';

const ratingConfig = {
    ...baseQueryConfig,
    baseUrl: baseQueryConfig.baseUrl + '/rating',
    prepareHeaders: (headers: Headers) => {
      const session = getToken();
      headers.set('Authorization', `Bearer ${session.token}`);
      return headers;
    },
}

export const ratingApi = createApi({
  reducerPath: 'RatingApi',
  tagTypes: ['Rating'],
  baseQuery: fetchBaseQuery(ratingConfig),
  endpoints: (builder) => ({
    getRatings: builder.query<any, { includeDetails?: boolean; organizationId?: string }>({
      query: (params) => ({
        url: '',
        params: {
          'include-details': params.includeDetails,
          'organization-id': params.organizationId,
        },
      }),
      providesTags: ['Rating'],
    }),
    
    getRatingById: builder.query<any, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ['Rating'],
    }),
    createRating: builder.mutation<any, any>({
      query: (data) => ({
        url: '',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Rating'],
    }),
    updateRating: builder.mutation<any, any>({
      query: (data) => ({
        url: `/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Rating'],
    }),
    deleteRating: builder.mutation<any, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Rating'],
    })
  }),
})

export const {
  useGetRatingsQuery,
  useCreateRatingMutation,
  useDeleteRatingMutation,
  useGetRatingByIdQuery,
  useUpdateRatingMutation } = ratingApi