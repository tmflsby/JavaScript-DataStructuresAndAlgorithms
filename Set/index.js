// 去重
const arr = [1,1,2,3,4,3,5,5]
const arr2 = [...new Set(arr)]

// 判断元素是否在集合中
const set = new Set(arr)
const has = set.has(6)

// 求交集
const set2 = new Set([2, 3, 6])
const set3 = new Set([...set].filter(item => set2.has(item)))

a
