import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const stationApi = createApi({
    reducerPath: 'stationsApi',
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
    tagTypes: ['Stations'],
    keepUnusedDataFor: 15,
    endpoints: (builder) => ({
        addChargingStation: builder.mutation({
            query: (reqBody) => ({
                url: `charge-box`,
                method: 'POST',
                body: reqBody
            }),
            invalidatesTags: ['Stations'],
            transformResponse: (response, meta, arg) => response.message,
            transformErrorResponse: (response, meta, arg) => response.error.message,
        }),
        deleteChargingStation: builder.mutation({
            query: (chargerId) => ({
                url: `charge-box/${chargerId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Stations'],
            transformResponse: (response, meta, arg) => response ?? 'DELETED',
            transformErrorResponse: (response, meta, arg) => response?.error ?? 'Something went wrong while deleting',
        }),
        getChargingStations: builder.query({
            query: () => `charge-box`,
            providesTags: ['Stations'],
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (response, meta, arg) => response?.data ?? "Error Code: 500: Could not connect to base server",
        }),
        updateChargingStation: builder.mutation({
            query: ({ chargerId, patchData }) => ({
                url: `charge-box/${chargerId}`,
                method: 'PATCH',
                body: patchData,
            }),
            invalidatesTags: ['Stations'],
            transformResponse: (response, meta, arg) => response.message,
            transformErrorResponse: (response, meta, arg) => response.data,
        }),
        getChargingStationById: builder.query({
            query: (chargerId) => `charge-box/${chargerId}`,
            providesTags: ['Stations'],
            transformResponse: (response, meta, arg) => response.data,
            transformErrorResponse: (response, meta, arg) => response.data,
        }),
    }),
})

export const {
    useAddChargingStationMutation,
    useDeleteChargingStationMutation,
    useGetChargingStationsQuery,
    useUpdateChargingStationMutation,
    useGetChargingStationByIdQuery, } = stationApi