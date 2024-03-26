import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://mern-fintellect-client.vercel.app/" }),
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({
        getKpis: build.query({
            query: () => "/api/kpi",
            providesTags: ["Kpis"],
        }),
        getProducts: build.query({
            query: () => "/api/products",
            providesTags: ["Products"]
        }),
        getTransactions: build.query({
            query: () => "/api/transactions",
            providesTags: ["Transactions"]
        })
    })
})

export const { useGetKpisQuery, useGetProductsQuery, useGetTransactionsQuery } =
  api;