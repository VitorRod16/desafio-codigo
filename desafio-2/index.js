 
    function sequenceChecker(sequence) {
        const validSeq = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        return sequence.every( (num, i) => num === validSeq[i] )
    }
    
    function checkRows(matrix){
        let arr = matrix.map(seq => seq.sort())
        return arr.every(seqArr => sequenceChecker(seqArr))
    }
    
    function checkColumns(matrix){
        let columnMatrix = [[], [], [], [], [], [], [], [], []]
        matrix.forEach( array => array.forEach((num, i) => columnMatrix[i].push(num)))
        return checkRows(columnMatrix)
    }
    
    function makeBox(matrix, rowOne, colOne){
        let arr = [
            matrix[rowOne][colOne],
            matrix[rowOne][colOne + 1],
            matrix[rowOne][colOne + 2],
            matrix[rowOne + 1][colOne],
            matrix[rowOne + 1][colOne + 1],
            matrix[rowOne + 1][colOne + 2],
            matrix[rowOne + 2][colOne],
            matrix[rowOne + 2][colOne + 1],
            matrix[rowOne + 2][colOne + 2]
        ]
        return arr
    }
    
    function checkBoxes(matrix){
        let boxesMatrix = [
            makeBox(matrix, 0, 0),
            makeBox(matrix, 0, 3),
            makeBox(matrix, 0, 6),
            makeBox(matrix, 3, 0),
            makeBox(matrix, 3, 3),
            makeBox(matrix, 3, 6),
            makeBox(matrix, 6, 0),
            makeBox(matrix, 6, 3),
            makeBox(matrix, 6, 6)
        ]
        return checkRows(boxesMatrix)
    }
    
    const validaSudoku = (matrix) => {
        const copy1 = [...matrix.map(arr => [...arr])]
        const copy2 = [...matrix.map(arr => [...arr])]
        const copy3 = [...matrix.map(arr => [...arr])]
        const checker = [
            checkRows(copy1),
            checkColumns(copy2),
            checkBoxes(copy3)
        ]
        if (checker.every(seq => seq)){
            return "Winner"
        } else {
            return "Please try again"
        }
    }

export {validaSudoku}