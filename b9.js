const arr1 = [1, 2, 5, 7];
const arr2 = [10, 5, 7];
arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

let smallestMissing1 = 1;
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === smallestMissing1) {
        smallestMissing1++;
    } else if (arr1[i] > smallestMissing1) {
        break;
    }
}
let smallestMissing2 = 1;
for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === smallestMissing2) {
        smallestMissing2++;
    } else if (arr2[i] > smallestMissing2) {
        break;
    }
}
console.log("Phần tử lớn nhất dương chưa xuất hiện trong mảng arr1 là:", smallestMissing1);
console.log("Phần tử lớn nhất dương chưa xuất hiện trong mảng arr2 là:", smallestMissing2);
