let arrs=[
    {name:'aaa',color:'红色'},
    {name:'bbb',color:'绿色'},
    {name:'ccc',color:'红色'},
    {name:'ddd',color:'绿色'},
]

/* let obj=arrs.find((obj) => obj.color ==='红色')
console.log(obj)

let obj1=arrs.findLast((obj) => obj.color ==='红色')
console.log(obj1) */

var index=arrs.findIndex((row)=>row.color=='绿色')
console.log(index)
var index2=arrs.findLastIndex((row)=>row.color=='红色')
console.log(index2)
var index3=arrs.findIndex((row)=>row.color=='白色')
console.log(index3)