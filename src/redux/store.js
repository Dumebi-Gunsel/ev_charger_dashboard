import { configureStore } from '@reduxjs/toolkit'
import layoutReducer from './layoutSlice/layoutSlice.js'
import stationsReducer from './stationsSlice/stationsSlice.js'
import { stationApi } from './stationsSlice/stationsActions.js'
import { setupListeners } from '@reduxjs/toolkit/query'

const store = configureStore({
    reducer: {
        layoutState: layoutReducer,
        stationsState: stationsReducer,
        [stationApi.reducerPath]: stationApi.reducer,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(stationApi.middleware)
})

setupListeners(store.dispatch)

export default store

