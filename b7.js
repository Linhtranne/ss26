const arr = [1, 5, 17, 32, 42, 1, 13, 25, 16, 10];
const input = parseInt(prompt("Nhập vào một số:"));
let arr1 = null;
for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    let temparr1 = [];
    for (let j = i; j < arr.length; j++) {
        currentSum += arr[j];
        temparr1.push(arr[j]);
        if (currentSum === input) {
            arr1 = temparr1;
            break;
        }
    }

    if (arr1) {
        break;
    }
}
if (arr1) {
    console.log(`Mảng con có tổng bằng ${input}: [${arr1.join(', ')}]`);
} else {
    console.log("Không có mảng con thỏa mãn");
}