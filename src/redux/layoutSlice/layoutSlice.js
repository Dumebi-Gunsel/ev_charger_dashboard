import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'

// {
//     isModalOpen: false,
//     modalKey: null,
//     data: null,
// },
const initialState = {
    modals: [],
    error: null,
    showSnackbar: false,
    message: null,
    snackColor: null,
    modalConfig: {
        text: null,
        confirmText: null
    }

}


export const layoutReducer = createSlice({
    name: 'layoutState',
    initialState: initialState,
    reducers: {
        pushModal: (state, action) => {
            state.modals = [...state.modals, action.payload]
            console.log("Modal Stack:::::::::::", state.modals);
        },
        popModal: (state, action) => {
            if (action.payload) {
                const index = state.modals.findIndex((m) => m.key === action.payload || m === action.payload)
                if (index) {
                    state.modals = state.modals.filter((m, i) => index !== i)
                }
            } else {
                state.modals.pop()
            }

        },
        setShowSnackbar: (state, action) => {
            if (action.payload) {
                state.showSnackbar = action.payload
            } else {
                state.showSnackbar = !state.showSnackbar;
            }
        },
        setError: (state, action) => {
            state.error = action.payload
            state.snackColor = 'danger'
        },
        setMessage: (state, action) => {
            state.message = action.payload
            state.snackColor = 'success'
        },
        resetState: (state, action) => {
            return initialState
        },
        clearSnackbar: (state, action) => {
            state.showSnackbar = false
            state.error = null
            state.message = null
            state.snackColor = null
        },
        setModalConfig: (state, action) => {
            state.modalConfig = action.payload
        },
        clearModalConfig: (state, action) => {
            state.modalConfig = initialState.modalConfig
        }
    }
})

export const { pushModal, popModal, setError, setShowSnackbar, setMessage, resetState, clearSnackbar, setModalConfig, clearModalConfig } = layoutReducer.actions
export default layoutReducer.reducer