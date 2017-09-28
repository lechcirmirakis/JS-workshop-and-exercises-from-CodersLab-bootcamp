console.log("--------------------> Z a d a n i e 2  <---------------");

function maxNumber() {
    var max = 1;
    for (var i = 0; i < arguments.length; i++) {
        if (max < arguments[i]) {
            max = arguments[i];
        }
    }
    return max;
}

console.log(maxNumber(3,45, 23, 56, 1123, 76, 45, 3));
