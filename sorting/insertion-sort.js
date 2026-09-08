// 插入排序（Insertion Sort）
// 像整理扑克牌，把每个元素插入到前面已排好的部分。
// 时间复杂度 O(n^2)，稳定，对规模小或接近有序的数据效率高。
// 运行：node sorting/insertion-sort.js

function insertionSort(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("insertionSort 需要传入数组");
  }
  const a = arr.slice();
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    while (j >= 0 && a[j] > key) {
      a[j + 1] = a[j];
      j--;
    }
    a[j + 1] = key;
  }
  return a;
}

module.exports = { insertionSort };

// 直接运行本文件时执行演示
if (require.main === module) {
  const demo = [5, 2, 8, 1, 9, 3];
  console.log("插入排序");
  console.log("原始数组:", demo);
  console.log("排序结果:", insertionSort(demo));
}
