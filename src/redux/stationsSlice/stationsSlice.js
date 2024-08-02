import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    data: null,
    error: null,
    loading: false,
    stations: null,
    stationDetails: null,
};


export const stationsReducer = createSlice({
    name: 'stationsState',
    initialState: initialState,
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setStations: (state, action) => {
            switch (action.payload.type) {
                case 'SET':
                    state.stations = action.payload.data
                    break;
                case 'CLEAR':
                    state.stations = null;
                    break;
                default:
                    state.stations = action.payload.data;
                    break;
            }

        },
        setStationDetails: (state, action) => {
            state.stationDetails = action.payload;
        }
    }
})

export const { setData, setError, setLoading, setStations, setStationDetails } = stationsReducer.actions
export default stationsReducer.reducer