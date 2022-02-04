import assert from 'assert';
import {ordenar, removerDuplicados} from "../desafio-1/index.js";
import { validaSudoku } from '../desafio-2/index.js';

const CORRECT_SUDOKU = [
    [8,3,5,4,1,6,9,2,7],
    [2,9,6,8,5,7,4,3,1],
    [4,1,7,2,9,3,6,5,8],
    [5,6,9,1,3,4,7,8,2],
    [1,2,3,6,7,8,5,4,9],
    [7,4,8,5,2,9,1,6,3],
    [6,5,2,7,8,1,3,9,4],
    [9,8,1,3,4,5,2,7,6],
    [3,7,4,9,6,2,8,1,5]
]

describe('Teste desafio 1', function () {
    describe('', function () {

        it('deve retornar lista ordenada', function () {
            assert.deepStrictEqual(ordenar([3, 3, 2, 2, 2, 1, 3, 4]), [1, 2, 2, 2, 3, 3, 3, 4]);
        });

        it('deve retornar lista com valores repetidos removidos', function () {
            assert.deepStrictEqual(removerDuplicados([3, 3, 2, 2, 2, 1, 3, 4]), [3, 2, 1, 4]);
        });

        it('deve retornar lista ordenada e com valores repetidos removidos', function () {
            assert.deepStrictEqual(ordenar(removerDuplicados([3, 3, 2, 2, 2, 1, 3, 4])), [1, 2, 3, 4]);
        });

    });
});
describe('Teste desafio 2', function () {
    describe('', function () {

        it('deve retornar uma verificação do sudoku', function () {
            assert.equal(validaSudoku(CORRECT_SUDOKU ), "Winner");
        }
        )
    }
    )
}
)