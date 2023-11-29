import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryConfig } from "../../../shared/api/api";
import { getToken } from '../../Admin/admin.models';

const contactConfig = {
    ...baseQueryConfig,
    baseUrl: baseQueryConfig.baseUrl + '/contact',
    prepareHeaders: (headers: Headers) => {
      const session = getToken();
      headers.set('Authorization', `Bearer ${session.token}`);
      return headers;
    },
}

export const contactApi = createApi({
  reducerPath: 'contactApi',
  tagTypes: ['Contact'],
  baseQuery: fetchBaseQuery(contactConfig),
  endpoints: (builder) => ({
    getContacts: builder.query<any, void>({
      query: () => ({
        url: '',
      }),
      providesTags: ['Contact'],
    }),
    getContactById: builder.query<any, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ['Contact'],
    }),
    createContact: builder.mutation<any, any>({
      query: (data) => ({
        url: '',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Contact'],
    }),
    updateContact: builder.mutation<any, any>({
      query: (data) => ({
        url: `/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation<any, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    })
  }),
})

export const {
  useGetContactsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useGetContactByIdQuery,
  useUpdateContactMutation } = contactApi