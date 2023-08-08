function diagonalDifference(arr) {
    let primary = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if (i == j){
                primary += arr[i][j];
            }
        }
    }

    console.log(arr.reverse());
    let secundary = 0;
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if (i == j){
                secundary += arr[i][j];
            }
        }
    }

    console.log(Math.abs(primary - secundary));
    console.log(primary);
    console.log(secundary);
}

diagonalDifference([[3,3,3,1],[11,2,4,1],[4,5,6,1],[10,8,-12,1]]);
diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]);
diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]);