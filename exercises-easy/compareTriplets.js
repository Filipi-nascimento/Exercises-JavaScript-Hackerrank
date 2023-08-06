/*Example
a = [1, 2, 3]
b = [3, 2, 1]
For elements *0*, Bob is awarded a point because a[0] .
For the equal elements a[1] and b[1], no points are earned.
Finally, for elements 2, a[2] > b[2] so Alice receives a point.
The return array is [1, 1] with Alice's score first and Bob's second.

Function Description
Complete the function compareTriplets in the editor below.

compareTriplets has the following parameter(s):
int a[3]: Alice's challenge rating
int b[3]: Bob's challenge rating

Return
int[2]: Alice's score is in the first position, and Bob's score is in the second.*/

function compareTriplets(a, b) {
    let array = [];
    let pointsAlice = 0;
    let pointsBob = 0;

    for(let i = 0; i < 3; i++){
        if(a[i] !== b[i]){    
            if (a[i] > b[i]){
                pointsAlice += 1;
            }else{
                pointsBob += 1;
            }
        }
        array = [pointsAlice,pointsBob];
    }
    return array;
}