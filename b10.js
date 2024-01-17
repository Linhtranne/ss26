let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 5, 7, 8];
let array3 = [5, 7, 8, 9, 10];
let i = 0, j = 0, k = 0;

console.log("Các phần tử chung của cả 3 mảng là:");

while (i < array1.length && j < array2.length && k < array3.length) {
    if (array1[i] === array2[j] && array2[j] === array3[k]) {
        console.log(array1[i]);
        i++;
        j++;
        k++;
    } else if (array1[i] < array2[j]) {
        i++;
    } else if (array2[j] < array3[k]) {
        j++;
    } else {
        k++;
    }
}
