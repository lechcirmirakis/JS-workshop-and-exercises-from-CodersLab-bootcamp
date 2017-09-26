    var task1Array = [
                      [2, 3],
                      ["Ala", "Ola"],
                      [true, false],
                      [5, 6, 7, 8],
                      [12, 15, 67]
                  ];

    var task2Array = [
                    [1, 2, 3, 4],
                    [5, 6, 7, 8],
                    [9, 10, 11, 12]
              ];

console.log("--------------------> Z a d a n i e 1  <---------------");

console.log(task1Array[2][1]);

console.log(task1Array[1].length);

console.log(task1Array[3][1]);

console.log("--------------------> Z a d a n i e 2  <---------------");

    for (var i = 0; i <= task2Array.length; i++) {
        console.log(task2Array[0][i]);
    }

    for (var i = 0; i < task2Array.length; i++) {
        console.log(task2Array[i].length);
    }

    for (var i = 0; i < task2Array.length; i++) {
        for (var j = 0; j < task2Array[i].length; j++) {
            console.log(task2Array[i][j]);
        }
    }

console.log("--------------------> Z a d a n i e 3  <---------------");

    function print2DArray(array) {
        for(var i = 0; i < array.length; i++) {
                for(var j = 0; j < array[i].length; j++) {
                    console.log(array[i][j]);
                }
        }
    }
    print2DArray([
        ["Mistrzem", "Polski", "Jest", "Legia", " "],
        ["Legia", "Najlepsza", "Jest",],
        ["Legia", "To", "Jest", "Potega"],
        ["Legia", "CWKS", ":)"]
    ]);

console.log("--------------------> Z a d a n i e 4  <---------------");

var array2d = [
    [2, 2, 3, 3],
    [4, 5, 7, 12, 12, 13],
    [43, 43, 23, 23,]
]

print2DArray([array2d]);

console.log("--------------------> Z a d a n i e 4  <---------------");
// nie skonczone
function create2DArray(rows, cols) {
    var arr = [];
    for (var i = 0; i < rows; i++) {
        arr.push([rows[i]]);
        arr[i].push(new Array(cols));
        for (var j = 0; j < cols; j++) {
        }
    }
    return arr;
}
console.log(create2DArray(4, 4));

console.log("--------------------> Z a d a n i e 0 z wykladowca  <---------------");

    function checkArray(array) {
        var check = [];
        for (var i = 0; i < array.length; i++) {
            for (var j = 0; j < array[i].length; j++) {
                if (array[i][0] % 2 !== 0 || array[j][1] % 2 !== 0) {
                    check.push(false);
                }
                else {
                    check.push(true);
                }
            }
        }

        return check
    }

    console.log(checkArray([
                            [11, 12],
                            [42, 2],
                            [-4, -120],
                            [0, 0],
                            [1, 34],
                            ]));
