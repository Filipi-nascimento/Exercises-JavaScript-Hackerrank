function simpleArraySum(ar) {
    var sum = 0;
    for(var i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    console.log(sum)
    return sum;
}

simpleArraySum([6,2,1]);