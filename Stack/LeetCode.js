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
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (c === '(' || c === '{' || c === '[') {
      stack.push(c)
    } else {
      const t = stack[stack.length - 1]
      if (
        (t === '(' && c === ')') ||
        (t === '{' && c === '}') ||
        (t === '[' && c === ']')
      ) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}
