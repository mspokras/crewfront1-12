import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {baseQueryConfig} from "../../../shared/api/api";

interface CreateAdminRequest {
    email: string;
    password: string;
}

const adminConfig={
    ...baseQueryConfig,
    baseUrl:baseQueryConfig.baseUrl+'/admin'
}

export const adminApi = createApi({
  reducerPath: 'adminApi',
  tagTypes: ['Admin'],
  baseQuery: fetchBaseQuery(adminConfig),
  endpoints: (builder) => ({
    getAdmins: builder.query<any, void>({
      query: () => ({
        url: '',
      }),
      providesTags: ['Admin'],
    }),
    getAdminById: builder.query<any, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ['Admin'],
    }),
    createAdmin: builder.mutation<any, CreateAdminRequest>({
      query: (data) => ({
        url: '',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Admin'],
    }),
    updateAdmin: builder.mutation<any, any>({
      query: (data) => ({
        url: `/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Admin'],
    }),
    deleteAdmin: builder.mutation<any, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Admin'],
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAdminsQuery,
  useCreateAdminMutation,
  useDeleteAdminMutation,
  useGetAdminByIdQuery,
  useUpdateAdminMutation } = adminApi