const arr = [1, 2, 3, 2, 4, 5, 6, 3, 7, 8, 8, 2, 4, 6, 8]; // Thay đổi mảng này theo nhu cầu

const occurrences = {};
const duplicates = [];
arr.forEach((num) => {
    occurrences[num] = (occurrences[num] || 0) + 1;
});
for (const num in occurrences) {
    if (occurrences[num] >= 2) {
        duplicates.push(parseInt(num));
    }
}

console.log("Các phần tử xuất hiện từ hai lần trở lên trong mảng là:", duplicates);
