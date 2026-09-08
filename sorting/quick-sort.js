// 快速排序（Quick Sort）
// 分治：选一个基准值，比它小的放左边、大的放右边，再递归排序两边。
// 平均时间复杂度 O(n log n)，最坏 O(n^2)。
// 运行：node sorting/quick-sort.js

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const pivot = arr[arr.length - 1]; // 取最后一个元素作基准
  const left = [];
  const right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const demo = [5, 2, 8, 1, 9, 3];
console.log("快速排序");
console.log("原始数组:", demo);
console.log("排序结果:", quickSort(demo));
