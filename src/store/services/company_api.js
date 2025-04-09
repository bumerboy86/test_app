import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { api } from "./api";

export const companyApi = api.injectEndpoints({
  reducerPath: "companyApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  endpoints: (build) => ({
    getCompanyById: build.query({
      query: (id) => `/companies/${id}`,
      invalidatesTags: ["Company"],
    }),
  }),
});

export const { useLazyGetCompanyByIdQuery } = companyApi;
