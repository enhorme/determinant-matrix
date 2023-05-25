import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface State<T> {
    matrixSize: number;
    matrix: T[][];
}

const initialState: State<number> = {
    matrixSize: 0,
    matrix: [],
}

const matrixSlice = createSlice({
    name: 'matrixSlice',
    initialState,
    reducers: {
        setMatrixSize: (state, action: PayloadAction<number>) => {
            state.matrixSize = action.payload
        },
        setMatrix: (state, action: PayloadAction<number[][]>) => {
            state.matrix = action.payload
        },
    },
})

export const {setMatrixSize, setMatrix} = matrixSlice.actions

export default matrixSlice.reducer
