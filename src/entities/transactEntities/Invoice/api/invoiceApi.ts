import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryConfig } from "../../../../shared/api/api";
import { getToken } from '../../../Admin/admin.models';

const invoiceConfig = {
    ...baseQueryConfig,
    baseUrl: baseQueryConfig.baseUrl + '/invoice',
    prepareHeaders: (headers: Headers) => {
      const session = getToken();
      headers.set('Authorization', `${session.token}`);
      return headers;
    },
}

export const invoiceApi = createApi({
  reducerPath: 'InvoiceApi',
  tagTypes: ['Invoice'],
  baseQuery: fetchBaseQuery(invoiceConfig),
  endpoints: (builder) => ({
    getInvoices: builder.query<any, { includeDetails?: boolean; organizationId?: string }>({
      query: (params) => ({
        url: '',
        params: {
          'include-details': params.includeDetails,
          'organization-id': params.organizationId,
        },
      }),
      providesTags: ['Invoice'],
    }),
    
    getInvoiceById: builder.query<any, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ['Invoice'],
    }),
    createInvoice: builder.mutation<any, any>({
      query: (data) => ({
        url: '',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Invoice'],
    }),
    updateInvoice: builder.mutation<any, any>({
      query: (data) => ({
        url: `/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Invoice'],
    }),
    deleteInvoice: builder.mutation<any, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Invoice'],
    })
  }),
})

export const {
  useGetInvoicesQuery,
  useCreateInvoiceMutation,
  useDeleteInvoiceMutation,
  useGetInvoiceByIdQuery,
  useUpdateInvoiceMutation } = invoiceApi