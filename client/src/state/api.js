import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Ensure that the environment variable is properly set
const baseUrl = import.meta.env.VITE_BASE_URL;

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }), // Ensure the baseUrl is correctly assigned
  reducerPath: "main",
  tagTypes: ["Kpis", "Products", "Transactions"],
  endpoints: function (builder) { // Use regular function syntax instead of arrow function
    return {
      getKpis: builder.query({
        query: function() {
          return "kpi/kpis/";
        },
        providesTags: ["Kpis"],
      }),
      getProducts: builder.query({
        query: function() {
          return "product/products/";
        },
        providesTags: ["Products"],
      }),
      getTransactions: builder.query({
        query: function() {
          return "transaction/transactions/";
        },
        providesTags: ["Transactions"],
      }),
    };
  },
});

// Export hooks for each endpoint
export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } = api;
