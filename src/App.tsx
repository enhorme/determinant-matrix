import React from 'react'
import Select from './components/Select'
import {createMatrix} from './utils/index'
import MatrixForm from './components/Form/index'
import {useAppSelector} from './redux/hooks'

function App() {
    const matrixSize = useAppSelector(state => state.matrix.matrixSize)

    return (
        <div>
            <Select/>
            <MatrixForm matrix={createMatrix(matrixSize)}></MatrixForm>
        </div>
    )
}

export default App
