import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface LatLong {
    latitude: number,
    longitude: number,
}

export const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://geocoding-api.open-meteo.com/v1/" }),
    endpoints: (builder) => ({
        getLatLong: builder.query<LatLong, string>({
            query: (location) => `search/?name=${location}&count=1`,
            // transformResponse: (response: { data: any }) => ({ latitude: response.data.latitude, longitude: response.data.longitude })
        })
    }),
})

export const { useLazyGetLatLongQuery } = locationApi;