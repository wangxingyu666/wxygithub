//let obj={city:'北京'}
//let desc=Object.getOwnPropertyDescriptor(obj,'city')
//console.log(desc)

let obj={city:'北京'}
//设置描述符，是否可以修改值
Object.defineProperty(obj,'city',{
    writable:false,
})
obj.city='上海'
console.log(obj)