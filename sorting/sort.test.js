// 排序算法测试：node sorting/sort.test.js
const assert = require("assert");
const { bubbleSort } = require("./bubble-sort");
const { quickSort } = require("./quick-sort");
const { insertionSort } = require("./insertion-sort");

const sorts = {
  冒泡排序: bubbleSort,
  快速排序: quickSort,
  插入排序: insertionSort,
};

const cases = [
  { input: [], expected: [] }, // 空数组
  { input: [1], expected: [1] }, // 单元素
  { input: [3, 1, 2], expected: [1, 2, 3] }, // 乱序
  { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] }, // 已有序
  { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] }, // 逆序
  { input: [3, 3, 1, 2, 1], expected: [1, 1, 2, 3, 3] }, // 重复元素
  { input: [9, -1, 0, 4, -3, 7], expected: [-3, -1, 0, 4, 7, 9] }, // 含负数
];

let passed = 0;
for (const [name, sort] of Object.entries(sorts)) {
  for (const { input, expected } of cases) {
    const original = input.slice();
    const result = sort(input);

    assert.deepStrictEqual(
      result,
      expected,
      `${name} 对 ${JSON.stringify(input)} 排序失败：得到 ${JSON.stringify(result)}`
    );
    assert.deepStrictEqual(input, original, `${name} 不应修改原数组`);
    passed++;
  }
}

console.log(`全部 ${passed} 个测试通过 ✅`);
