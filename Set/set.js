let mySet = new Set()

mySet.add(1)
mySet.add(5)
mySet.add(5)

mySet.add('some text')

let o = {
  a: 1,
  b: 2
}
mySet.add(o)
mySet.add({a: 1, b: 2})

const has = mySet.has(o)

mySet.delete(5)

for (let item of mySet) console.log(item)

for (let item of mySet.keys()) console.log(item)

for (let item of mySet.values()) console.log(item)

for (let [key, value] of mySet.entries()) console.log(key, value)

const myArr = [...mySet]
const myArr1 = Array.from(mySet)

const mySet1 = new Set([1,2,3,4])

// 交集
const intersection = new Set([...mySet].filter(x => mySet1.has(x)))

// 差集
const difference = new Set([...mySet].filter(x => !mySet1.has(x)))
a
