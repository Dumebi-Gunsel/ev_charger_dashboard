import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    modal: {
        isModalOpen: false,
        modalKey: null,
        data: null,
    },
    error: null,
    showSnackbar: false,
    message: null,
    snackColor: null,

}


export const layoutReducer = createSlice({
    name: 'layoutState',
    initialState: initialState,
    reducers: {
        setModalOpen: (state, action) => {
            if (action.payload) {
                state.modal.isModalOpen = action.payload.isOpen
                state.modal.modalKey = action.payload.key
                state.modal.data = action.payload.data
            } else {
                state.modal.isModalOpen = !state.isModalOpen;
                state.modal.modalKey = null;
                state.modal.data = null
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
        }
    }
})

export const { setModalOpen, setError, setShowSnackbar, setMessage, resetState, clearSnackbar } = layoutReducer.actions
export default layoutReducer.reducer