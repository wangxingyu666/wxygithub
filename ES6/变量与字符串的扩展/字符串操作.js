//判断某个字符串是否包含另一个字符串片段
//const str='You are the best engineer.'
//console.log(str.indexOf('best'))
//console.log(str.indexOf('bst'))

//ES6的一些新方法
//console.log(str.includes('best'))
//console.log(str.startsWith('You'))
//console.log(str.endsWith('eer.'))

//字符串重复n次
/* let str='测试内容'
str = str.repeat(100)
console.log(str) */

//字符串批量的替换
let str = 'xxx love you ,yyy love you ,zzz love you'
str = str.replaceAll('you', 'me')
//console.log(str)

//模版字符串
var title = '块级元素'
var divStr = `
<div>
<span>${title}</span>
</div>
`
