import React, {FC, useState} from 'react'

import styles from './form.module.scss'

type Matrix = number[][];

interface MatrixFormProps {
    matrix?: Matrix;
}

const MatrixForm: FC<MatrixFormProps> = ({matrix}) => {
    const [inputMatrix, setInputMatrix] = useState<Matrix>()
    return (
        <form className={styles.form}>
            {matrix?.map((row, rowIndex) => (
                <div key={rowIndex}>
                    {row.map((col, colIndex) => (
                        <input

                            key={colIndex}
                            type="number"
                            value={col}
                        />
                    ))}
                </div>
            ))}
        </form>
    )
}

export default MatrixForm
