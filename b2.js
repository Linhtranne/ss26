const arr = [2, 5, 3, 8, 1, 7, 4, 6];
const input = parseInt(prompt("Nhập vào một giá trị:"));
let address = -1;
for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === input) {
        address = i;
        break;
    }
}
if (address !== -1) {
    console.log(`Phần tử ${input} được tìm thấy tại vị trí ${address} trong mảng.`);
} else {
    console.log("Phần tử không tồn tại trong mảng.");
}