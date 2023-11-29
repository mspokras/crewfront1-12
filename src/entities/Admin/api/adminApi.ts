import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryConfig } from "../../../shared/api/api";
import { getToken } from '../admin.models';

interface CreateAdminRequest {
    name: string;
    email: string;
    status: string;
}

const adminConfig = {
    ...baseQueryConfig,
    baseUrl: baseQueryConfig.baseUrl + '/admin',
    prepareHeaders: (headers: Headers) => {
      const session = getToken();
      headers.set('Authorization', `${session.token}`);
      return headers;
    },
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
    }),
    triggerAdmin: builder.mutation<any, { email: string; uid: string }>({
      query: ({ email, uid }) => ({
        url: '/trigger',
        method: 'POST',
        body: { email, uid },
      }),
      invalidatesTags: ['Admin'],
    }),
  }),
})

export const {
  useGetAdminsQuery,
  useCreateAdminMutation,
  useDeleteAdminMutation,
  useGetAdminByIdQuery,
  useUpdateAdminMutation,
  useTriggerAdminMutation } = adminApi