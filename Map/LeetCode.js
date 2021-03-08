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
const intersection = (nums1, nums2) => {
  const map = new Map()
  nums1.forEach(n => {
    map.set(n, true)
  })
  const res = []
  nums2.forEach(n => {
    if (map.get(n)) {
      res.push(n)
      map.delete(n)
    }
  })
  return res
}





/**
 * 20. 有效的括号
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']'的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 1. 左括号必须用相同类型的右括号闭合。
 * 2. 左括号必须以正确的顺序闭合。
 *
 * 输入：s = "()"        输出：true
 * 输入：s = "()[]{}"    输出：true
 * 输入：s = "(]"        输出：false
 * 输入：s = "([)]"      输出：false
 * 输入：s = "{[]}"      输出：true
 * */

/**
 * @param {string} s
 * @return {boolean}
 * */
const isValid = (s) => {
  if (s.length % 2 === 1) return false
  const stack = []
  const map = new Map()
  map.set('(', ')')
  map.set('{', '}')
  map.set('[', ']')
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (map.has(c)) {
      stack.push(c)
    } else {
      const t = stack[stack.length - 1]
      if (map.get(t) === c) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}







/**
 * 1. 两数之和
 * 给定一个整数数组 nums和一个整数目标值 target，请你在该数组中找出 和为目标值 的那两个整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 你可以按任意顺序返回答案。
 *
 * 输入：nums = [2,7,11,15], target = 9
 * 输出：[0,1]
 * 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
 *
 * 输入：nums = [3,2,4], target = 6   输出：[1,2]
 * 输入：nums = [3,3], target = 6     输出：[0,1]
 * */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]
    const n2 = target - n
    if (map.has(n2)) {
      return [map.get(n2), i]
    } else {
      map.set(n, i)
    }
  }
}





/**
 * 3. 无重复字符的最长子串
 *
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 输入: s = "abcabcbb"   输出: 3     解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
 * 输入: s = "bbbbb"      输出: 1     解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
 * 输入: s = "pwwkew"     输出: 3     解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 * 输入: s = ""           输出: 0
 * */

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
  let l = 0
  let res = 0
  const map = new Map()
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r]) >= l) {
      l = map.get(s[r]) + 1
    }
    res = Math.max(res, r - l + 1)
    map.set(s[r], r)
  }
  return res
}







/**
 * 76. 最小覆盖子串
 *
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。
 * 如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。
 * 注意：如果 s 中存在这样的子串，我们保证它是唯一的答案。
 *
 * 输入：s = "ADOBECODEBANC", t = "ABC"    输出："BANC"
 * 输入：s = "a", t = "a"                  输出："a"
 * */

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
const minWindow = (s, t) => {
  let l = 0
  let r = 0
  const need = new Map()
  for (let c of t) {
    need.set(c, need.has(c) ? need.get(c) + 1 : 1)
  }
  let needType = need.size
  let res = ''
  while (r < s.length) {
    const c = s[r]
    if (need.has(c)) {
      need.set(c, need.get(c) - 1)
      if (need.get(c) === 0) needType -= 1
    }
    while (needType === 0) {
      const newRes = s.substring(l, r + 1)
      if (!res || newRes.length < res.length) res = newRes
      const c2 = s[l]
      if (need.has(c2)) {
        need.set(c2, need.get(c2) + 1)
        if (need.get(c2) === 1) needType += 1
      }
      l += 1
    }
    r += 1
  }
  return res
}
