import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryConfig } from "../../../shared/api/api";
import { getToken } from '../../Admin/admin.models';

const branchConfig = {
    ...baseQueryConfig,
    baseUrl: baseQueryConfig.baseUrl + '/branch',
    prepareHeaders: (headers: Headers) => {
      const session = getToken();
      headers.set('Authorization', `${session.token}`);
      return headers;
    },
}

export const branchApi = createApi({
  reducerPath: 'BranchApi',
  tagTypes: ['Branch'],
  baseQuery: fetchBaseQuery(branchConfig),
  endpoints: (builder) => ({
    getBranches: builder.query<any, { includeDetails?: boolean; organizationId?: string }>({
      query: (params) => ({
        url: '',
        params: {
          'include-details': params.includeDetails,
          'organization-id': params.organizationId,
        },
      }),
      providesTags: ['Branch'],
    }),
    getBranchById: builder.query<any, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ['Branch'],
    }),
    createBranch: builder.mutation<any, any>({
      query: (data) => ({
        url: '',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Branch'],
    }),
    updateBranch: builder.mutation<any, any>({
      query: (data) => ({
        url: `/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Branch'],
    }),
    deleteBranch: builder.mutation<any, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Branch'],
    })
  }),
})

export const {
  useGetBranchesQuery,
  useCreateBranchMutation,
  useDeleteBranchMutation,
  useGetBranchByIdQuery,
  useUpdateBranchMutation } = branchApi