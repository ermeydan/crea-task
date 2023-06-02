import { HttpStatusCode } from '@crea/ui/enums';
import { logoutAction, store } from '@crea/ui/store';
import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: 'http://localhost:3000' },
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig['method'];
      data?: AxiosRequestConfig['data'];
      params?: AxiosRequestConfig['params'];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params }) => {
    const { token } = store.getState().AuthState;

    try {
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
      const err = axiosError as AxiosError;

      if (token && HttpStatusCode.UNAUTHORIZED == err.response?.status) {
        store.dispatch(logoutAction());
      }

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
