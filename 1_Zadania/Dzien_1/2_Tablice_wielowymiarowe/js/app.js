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
        for (var j = 0; j < task2Array.length; j++) {
            console.log(task2Array[i][j]);
        }
    }

console.log("--------------------> Z a d a n i e 3  <---------------");

    // function print2DArray(array) {
    //     var arraySum = [];
    //     for (var i = 0; i < array.length; i++) {
    //         for (var j = 0; j < array.length; j++) {
    //             console.log(array[i][j]);
    //         }
    //     }
    // }
    //
    // console.log(print2DArray([
    //     [1, 2, 3],
    //     [4, 5, 6],
    // ]));
