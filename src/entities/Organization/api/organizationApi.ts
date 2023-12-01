import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryConfig } from "../../../shared/api/api";
import { getToken } from '../../Admin/admin.models';

const organizationConfig = {
    ...baseQueryConfig,
    baseUrl: baseQueryConfig.baseUrl + '/organization',
    prepareHeaders: (headers: Headers) => {
      const session = getToken();
      headers.set('Authorization', `${session.token}`);
      return headers;
    },
}

export const organizationApi = createApi({
  reducerPath: 'OrganizationApi',
  tagTypes: ['Organization'],
  baseQuery: fetchBaseQuery(organizationConfig),
  endpoints: (builder) => ({
    getOrganizations: builder.query<any, void>({
      query: () => ({
        url: '',
      }),
      providesTags: ['Organization'],
    }),
    getOrganizationById: builder.query<any, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ['Organization'],
    }),
    createOrganization: builder.mutation<any, any>({
      query: (data) => ({
        url: '',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Organization'],
    }),
    updateOrganization: builder.mutation<any, any>({
      query: (data) => ({
        url: `/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Organization'],
    }),
    deleteOrganization: builder.mutation<any, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Organization'],
    })
  }),
})

export const {
  useGetOrganizationsQuery,
  useCreateOrganizationMutation,
  useDeleteOrganizationMutation,
  useGetOrganizationByIdQuery,
  useUpdateOrganizationMutation } = organizationApi