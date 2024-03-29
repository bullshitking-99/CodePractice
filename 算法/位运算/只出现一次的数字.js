/* 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
说明：你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？ */

/* 线性时间复杂度：就是O(n) */

/* 示例
输入: [2,2,1]
输出: 1 
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let res = 0;
  for (let num of nums) {
    res = res ^ num;
  }
  return res;
};
