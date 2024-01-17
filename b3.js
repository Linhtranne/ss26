const integerArray = [2, 5, 3, 2, 8, 2, 3, 1, 7, 5, 2];
const userNumber = parseInt(prompt("Nhập:"));
let occurrenceCount = 0;

for (let i = 0; i < integerArray.length; i++) {
    if (integerArray[i] === userNumber) {
        occurrenceCount++;
    }
}

console.log(`Phần tử ${userNumber} xuất hiện ${occurrenceCount} lần trong mảng.`);
