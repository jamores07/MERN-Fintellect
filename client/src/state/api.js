import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5173/api' }),
    reducerPath: "main",
    tagTypes: ["KPIs"],
    endpoints: (build) => ({
        getKPIs: build.query({
            query: () => "/kpi",
            providesTags: ["KPIs"]
        }),

    })
})

export const { useGetKPIsQuery } = api;