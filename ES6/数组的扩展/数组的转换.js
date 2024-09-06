//from:对象转数组
// from() flat()
/* var obj = {
  0: 'a',
  1: 'b',
  length: 2,
}
var arr = Array.from(obj)
console.log(arr) */

/* var arr=[1,2,3,2,1]
var set =new Set(arr)
Array.from(set)
console.log(set) */


//flat:数组扁平化
/* let arr=[1,2,[3,4,[5]]]
arr.flat()
console.log(arr)
arr.flat(2)
console.log(arr) */
//arrs=arrs.flat(3)
//console.log(arrs)

//sort:排序
let arrs=[3,4,1,8,5]
let res=arrs.sort((e1,e2)=>{
    return e2-e1
})
console.log(res)