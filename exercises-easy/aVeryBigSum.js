/*Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.
aVeryBigSum has the following parameter(s):
int ar[n]: an array of integers .

Return
long: the sum of all array elements

Input Format
The first line of the input consists of an integer n.
The next line contains n space-separated integers contained in the array.

Output Format
Return the integer sum of the elements in the array.*/
function aVeryBigSum(ar) {
    let long = 0;

    for(let i = 0;i < ar.length; i++){
        long += ar[i];
    }
    return long;
}

//Using Reduce

function aVeryBigSumRdc(ar) {
    // return ar.reduce((arSum,arr)=>arSum+arr,0);
    console.log(ar.reduce((arSum,arr)=>arSum+arr,0));
}

aVeryBigSumRdc([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);