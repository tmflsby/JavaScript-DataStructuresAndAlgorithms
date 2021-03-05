const obj = {}
Object.prototype.x = 'x'

const func = () => {}
Function.prototype.y = 'y'

const arr = []


/**
 * 面试题一
 * instanceof 的原理，并用代码实现
 * */
const instanceOf = (A, B) => {
  let p = A
  while (p) {
    if (p === B.prototype) {
      return true
    }
    p = p.__proto__
  }
  return false
}

/**
 * 面试题二
 * */
const foo = {}
const F = () => {}

Object.prototype.a = 'value a'
Function.prototype.b = 'value b'

console.log(foo.a)
console.log(foo.b)

console.log(F.a)
console.log(F.b)
