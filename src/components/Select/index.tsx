import {ChangeEvent, FC} from 'react'

import {useAppDispatch, useAppSelector} from '../../redux/hooks'
import {setMatrixSize} from '../../redux/slices/formSlice'

const Select: FC = () => {
    const matrixSize = useAppSelector((state) => state.matrix.matrixSize)
    const dispatch = useAppDispatch()

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setMatrixSize(+event.target.value))
    }

    return (
        <select value={matrixSize} onChange={onSelectChange} defaultValue={3}>
            <option value={3}>3x3</option>
            <option value={4}>4x4</option>
            <option value={5}>5x5</option>
            <option value={6}>6x6</option>
            <option value={7}>7x7</option>
        </select>
    )
}

export default Select
