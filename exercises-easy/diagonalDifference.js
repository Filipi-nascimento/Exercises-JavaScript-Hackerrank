/*link to view the description of the diagonal difference problem.

https://www.hackerrank.com/challenges/diagonal-difference/problem 
*/
function diagonalDifference(arr) {
    let index = 0;
    let sumResult = [0,0];
    let exitFlag = 0;

    do{
        let sum = 0;
        for(let i = 0; i < arr.length; i++){
            for(let j = 0; j < arr.length; j++){
                if (i == j){
                    sum += arr[i][j];
                }
            }
        }

        sumResult[index] += sum;
        index++;

        arr.reverse();

        exitFlag++;

    }while (exitFlag < 2)

    console.log(Math.abs(sumResult[0] - sumResult[1]));
}

diagonalDifference([[3,3,3,1],[11,2,4,1],[4,5,6,1],[10,8,-12,1]]);
//12 20
diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]);
// 4 19
diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]);
//15 17