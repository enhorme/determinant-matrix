import {configureStore} from '@reduxjs/toolkit'

import matrixReducer from './slices/formSlice'

const store = configureStore({
    reducer: {
        matrix: matrixReducer
    },
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store
