// 快速排序（Quick Sort）
// 原地分治：随机选基准，比它小的放左、大的放右，再递归排序。
// 平均时间复杂度 O(n log n)，空间 O(log n)。
// 运行：node sorting/quick-sort.js

function quickSort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("quickSort 需要传入数组");
  }
  const a = arr.slice();
  sortRange(a, 0, a.length - 1);
  return a;
}

// 对 a[lo..hi] 闭区间原地排序
function sortRange(a, lo, hi) {
  while (lo < hi) {
    const p = partition(a, lo, hi);
    // 先递归较小的分区，较大的分区用循环继续，把递归深度控制在 O(log n)
    if (p - lo < hi - p) {
      sortRange(a, lo, p - 1);
      lo = p + 1;
    } else {
      sortRange(a, p + 1, hi);
      hi = p - 1;
    }
  }
}

// Lomuto 划分：随机选基准放到末尾，返回基准最终位置
function partition(a, lo, hi) {
  const pivotIndex = lo + Math.floor(Math.random() * (hi - lo + 1));
  [a[pivotIndex], a[hi]] = [a[hi], a[pivotIndex]];
  const pivot = a[hi];
  let i = lo; // i 左侧（含）都 < pivot
  for (let j = lo; j < hi; j++) {
    if (a[j] < pivot) {
      [a[i], a[j]] = [a[j], a[i]];
      i++;
    }
  }
  [a[i], a[hi]] = [a[hi], a[i]];
  return i;
}

module.exports = { quickSort };

// 直接运行本文件时执行演示
if (require.main === module) {
  const demo = [5, 2, 8, 1, 9, 3];
  console.log("快速排序");
  console.log("原始数组:", demo);
  console.log("排序结果:", quickSort(demo));
}
