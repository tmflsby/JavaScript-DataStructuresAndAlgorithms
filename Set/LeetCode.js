/**
 * 349. 两个数组的交集
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]      输出：[2]
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]  输出：[9,4]
 * */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 * */
const intersection = (nums1, nums2) => [...new Set(nums1)].filter(n => new Set(nums2).has(n))
const intersection1 = (nums1, nums2) => [...new Set(nums1)].filter(n => nums2.includes(n))
