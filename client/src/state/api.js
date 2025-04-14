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

//tagTypes : Declares types of data (e.g., "Kpis", "Products") , used to identify and manage cache. think of it like this you’re saying: “Hey Redux, I will have 3 types of data to track — Kpis, Products, and Transactions.”

//providesTags: Tags the data returned by a query, tells RTK Query: “This data belongs to this tag.”

// In this code, useGetKpisQuery, useGetProductsQuery, and useGetTransactionsQuery are React hooks generated by the createApi function from Redux Toolkit Query (RTK Query). These hooks are connected to the corresponding getKpis, getProducts, and getTransactions endpoints through the endpoints configuration in the createApi function.

//   Here's how the connection works:

//   Defining Endpoints: In the endpoints section of the createApi function, you're defining three queries:
//   getKpis: This query will fetch data from the "kpi/kpis/" URL.
//   getProducts: This query will fetch data from the "product/products/" URL.
//   getTransactions: This query will fetch data from the "transaction/transactions/" URL.
//   Generated Hooks: When you call createApi, it automatically generates React hooks for each endpoint you define. So for each query (getKpis, getProducts, and getTransactions), RTK Query will generate a corresponding hook: 
//   useGetKpisQuery: This hook is connected to the getKpis query.
//   useGetProductsQuery: This hook is connected to the getProducts query. 
//   useGetTransactionsQuery: This hook is connected to the getTransactions query.
  
//   How they work together:

//   Each hook (useGetKpisQuery, useGetProductsQuery, and useGetTransactionsQuery) is a wrapper around its respective query.
//   When you call one of these hooks in your component, it will:
//   Execute the corresponding query (e.g., getKpis), fetching data from the server.
//   Return the status of the request, such as whether it's loading, succeeded, or failed.
//   Automatically manage caching and data fetching for you.
