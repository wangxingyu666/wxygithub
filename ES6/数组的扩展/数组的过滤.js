/* let arrs=[
    {name:'aaa',color:'红色'},
    {name:'bbb',color:'绿色'},
    {name:'ccc',color:'红色'},
    {name:'ddd',color:'绿色'},
] */


var generals=[
    {id:1,name:'吕布'},
    {id:2,name:'关羽'},
    {id:3,name:'马超'},
    {id:4,name:'刘备'},
]
//var flarr=generals.filter((row) => row.id >=3)
//var flarr=generals.slice(1,3)
//console.log(flarr)

var arrs=['张环','李朗','杨方','任阔']
console.log(arrs.includes('张环'))
console.log(arrs.includes('魔灵'))
console.log(arrs.includes('李朗'))
console.log(arrs.includes('李朗',2))