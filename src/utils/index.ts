type Matrix = number[][];
type SubMatrix = [number, number[][]];
type LatexStep = [number, number[][]];
type LatexMap = Map<number[][], string | LatexStep[]>;

const determinant3 = (matrix: number[][]): [number, string] => {
    const [a, b, c] = matrix[0]
    const [d, e, f] = matrix[1]
    const [g, h, i] = matrix[2]

    const det =
        a * e * i +
        b * f * g +
        c * d * h -
        (a * f * h +
            b * d * i +
            c * e * g)

    const solStr = `(${a}) \\cdot (${e}) \\cdot (${i}) + (${b}) \\cdot (${f}) \\cdot (${g}) + (${c}) \\cdot (${d}) \\cdot (${h}) - ((${a}) \\cdot (${f}) \\cdot (${h}) + (${b}) \\cdot (${d}) \\cdot (${i}) + (${c}) \\cdot (${e}) \\cdot (${g})) = ${det}`
    return [det, solStr]
}

const computeDeterminant = (matrix: number[][], latexMap: LatexMap): number => {
    const matrixSize = matrix.length
    if (matrixSize === 3) {
        const [det, solStr] = determinant3(matrix)
        latexMap.set(matrix, solStr)
        return det
    }

    const subMatrices: SubMatrix[] = []
    const latexSteps: LatexStep[] = []

    for (let i = 0; i < matrixSize; i++) {
        const coefficient = matrix[0][i]
        const subMatrix = matrix.slice(1).map(row => row.filter((_, index) => index !== i))
        subMatrices.push([coefficient, subMatrix])
        latexSteps.push([coefficient, subMatrix])
    }

    latexMap.set(matrix, latexSteps)

    let determinant = 0
    for (const [coefficient, subMatrix] of subMatrices) {
        determinant += coefficient * computeDeterminant(subMatrix, latexMap)
    }

    return determinant
}


export const createMatrix = (size: number): Matrix => {
    const matrix: Matrix = []

    for (let i = 0; i < size; i++) {
        const row: number[] = []
        for (let j = 0; j < size; j++) {
            row.push(0)
        }
        matrix.push(row)
    }

    return matrix
}

export const computeDeterminantWithSteps = (matrix: number[][]): [LatexMap, number] => {
    const latexMap: LatexMap = new Map()
    const determinant = computeDeterminant(matrix, latexMap)
    return [latexMap, determinant]
}
