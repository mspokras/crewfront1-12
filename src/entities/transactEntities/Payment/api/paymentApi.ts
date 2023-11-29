import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { baseQueryConfig } from "../../../../shared/api/api";
import { getToken } from '../../../Admin/admin.models';

const paymentConfig = {
    ...baseQueryConfig,
    baseUrl: baseQueryConfig.baseUrl + '/payment',
    prepareHeaders: (headers: Headers) => {
      const session = getToken();
      headers.set('Authorization', `Bearer ${session.token}`);
      return headers;
    },
}

export const paymentApi = createApi({
  reducerPath: 'PaymentApi',
  tagTypes: ['Payment'],
  baseQuery: fetchBaseQuery(paymentConfig),
  endpoints: (builder) => ({
    getPayments: builder.query<any, { includeDetails?: boolean; organizationId?: string }>({
      query: (params) => ({
        url: '',
        params: {
          'include-details': params.includeDetails,
          'organization-id': params.organizationId,
        },
      }),
      providesTags: ['Payment'],
    }),
    
    getPaymentById: builder.query<any, string>({
      query: (id) => ({
        url: `/${id}`,
      }),
      providesTags: ['Payment'],
    }),
    createPayment: builder.mutation<any, any>({
      query: (data) => ({
        url: '',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Payment'],
    }),
    updatePayment: builder.mutation<any, any>({
      query: (data) => ({
        url: `/${data.id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Payment'],
    }),
    deletePayment: builder.mutation<any, string>({
      query: (id) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Payment'],
    })
  }),
})

export const {
  useGetPaymentsQuery,
  useCreatePaymentMutation,
  useDeletePaymentMutation,
  useGetPaymentByIdQuery,
  useUpdatePaymentMutation } = paymentApi