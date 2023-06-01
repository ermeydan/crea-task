import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios, { AxiosRequestConfig, AxiosError } from 'axios'

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: 'http://localhost:3000' }
): BaseQueryFn<
{
  url: string
  method: AxiosRequestConfig['method']
  data?: AxiosRequestConfig['data']
  params?: AxiosRequestConfig['params']
},
unknown,
unknown
> =>
  async ({ url, method, data, params }) => {
  try {
    const token = "asd"

    const result = await axios({
      url: baseUrl + url,
      method,
      data,
      params,
      headers: {
        ...(!!token && {
          Authorization: `Bearer ${token}`,
        }),
      },
    });

    return result;
  } catch (axiosError) {
    const err = axiosError as AxiosError
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data || err.message,
      },
    }
  }
}

