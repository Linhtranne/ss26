const numberArray = [5, -3, 8, -2, 7, -1, 4];

const rearrangedArray = numberArray.filter(num => num < 0).concat(numberArray.filter(num => num >= 0));

// In kết quả ra màn hình console
console.log("Mảng sau khi di chuyển các phần tử âm lên đầu và dương về cuối:", rearrangedArray);
