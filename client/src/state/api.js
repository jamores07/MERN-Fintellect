import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "https://mern-fintellect-client.vercel.app/" }),
    tagTypes: ["Kpis", "Products", "Transactions"],
    endpoints: (build) => ({
        getKpis: build.query({
            query: () => "/api/kpi",
            providesTags: ["Kpis"],
        }),
    })
})

export const { useGetKpisQuery } =
  api;