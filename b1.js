let arr = [3, "hello", true, 7, "world", 9, "42", false];
let hasInteger = false;

console.log("Các số nguyên trong mảng:");

for (let i = 0; i < arr.length; i++) {
    if (Number.isInteger(arr[i])) {
        console.log(arr[i]);
        hasInteger = true;
    }
}

if (!hasInteger) {
    console.log("Trong mảng không tồn tại số nguyên.");
}
