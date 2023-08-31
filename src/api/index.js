import axios from 'axios';
import React, { useState } from 'react';

const apiUrl = process.env.REACT_APP_API_URL;

const IUIKitApiState = {
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  RESOLVED: 'RESOLVED',
  REJECTED: 'REJECTED'
};

export function useApiModelWithoutArgument() {
  return async function () {
    return '';
  };
}

export function useApiModelWithArgument() {
  return async function (data) {
    return data;
  };
}

export function useApi(API, _) {
  const [apiState, setApiState] = useState(IUIKitApiState.IDLE);
  const [errorMessage, setErrorMessage] = useState('');

  const setupCall = async (args = {}) => {
    setApiState(IUIKitApiState.PENDING);
    setErrorMessage('');


    try {
      const requestHeaders = {
        "Content-Type": "application/json",
        // Add more headers here based on your requirements
      };

      const paginationMeta = {
        page: 1,
        previous_page: false,
        next_page: false,
        page_count: 0,
        total: 0,
        limit: 0,
        offset: 0
      };

      if (args.query?.per_page && args.query?.page) {
        paginationMeta.offset =
          (Number(args.query.per_page) * Number(args.query.page)) -
          Number(args.query.per_page);
        paginationMeta.limit = Number(args.query.per_page);
        paginationMeta.page = Number(args.query.page);
        args.query = {
          ...args.query,
          offset: paginationMeta.offset,
          limit: paginationMeta.limit
        };
      }

      const response = await axios(
        {
          method: API.method,
          url: `${apiUrl}/${API.route}?${new URLSearchParams(args.query).toString()}#${args.urlHash}`,
          data: args.body,
          headers: {
            ...requestHeaders,
            ...API.headers,
            'Content-Type': 'application/json'
          },
          ...API.options
        }
        
      );
      
      if (typeof API.callback === 'function') {
        await API.callback(response.data);
      }

      setApiState(IUIKitApiState.RESOLVED);

      if (typeof API.formatResponse === 'function') {
        return API.formatResponse(response.data);
      }

      const totalCount = response.data?.meta?.total_count || 0;
      if (totalCount >= 0) {
        const pageCount = Math.ceil(totalCount / args.query?.per_page);
        response.data.meta = {
          page: args.query?.page,
          per_page: args.query?.per_page,
          previous_page: args.query?.page > 1,
          next_page: args.query?.page < pageCount,
          page_count: pageCount,
          total: totalCount
        };
      }

      return response.data;
    } catch (error) {
      if (
        error.status === 400 &&
        error.message === 'App version mismatch, Refresh app.' &&
        typeof window !== 'undefined'
      ) {
        window.location.reload();
      }

      // Handle errors and emit error events if applicable

      setApiState(IUIKitApiState.REJECTED);
      setErrorMessage(
        error?.data?.data?.message ||
          error?.data?.data?.error ||
          error?.data?.message ||
          error?.data?.error ||
          error.statusMessage ||
          error.message ||
          'Error occurred, please contact support'
      );
      throw error?.data?.data || error?.data || error;
    }
  };

  const clearState = () => {
    setApiState(IUIKitApiState.IDLE);
    setErrorMessage('');
  };

  return {
    state: apiState,
    isPending: apiState === IUIKitApiState.PENDING,
    error: errorMessage,
    call: setupCall,
    clearState
  };
}
