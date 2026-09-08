// 冒泡排序（Bubble Sort）
// 相邻元素两两比较，把较大的往后"冒泡"。时间复杂度 O(n^2)，稳定。
// 运行：node sorting/bubble-sort.js

function bubbleSort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("bubbleSort 需要传入数组");
  }
  const a = arr.slice();
  const n = a.length;
  for (let i = 0; i < n - 1; i++) {
    let swapped = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (a[j] > a[j + 1]) {
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        swapped = true;
      }
    }
    // 本轮没有交换，说明已经有序，提前结束
    if (!swapped) break;
  }
  return a;
}

module.exports = { bubbleSort };

// 直接运行本文件时执行演示
if (require.main === module) {
  const demo = [5, 2, 8, 1, 9, 3];
  console.log("冒泡排序");
  console.log("原始数组:", demo);
  console.log("排序结果:", bubbleSort(demo));
}
