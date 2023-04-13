import * as React from 'react';

export type TApiResponse = {
  status: Number;
  data: any;
  error: any;
};

export const useApi = async (url: string): Promise<TApiResponse> => {
  // === api request function
  try {
    const api = await fetch(url);
    const json = await api.json();

    return {
      status: api.status,
      data: json,
      error: [],
    };
  } catch (error) {
    return {
      status: 400,
      data: [],
      error: error,
    };
  }
};
