//const fs = require('fs')
//异步读取文件
/* fs.readFile('E:\frontend-study\NodeJS\内置模块\test.txt',
    'utf-8',
    (err,data)=>{
        console.log('文件内容是:',data)
}) */

//同步写入文件
/* const fs = require('fs')
 try{
    let content='新的文件内容'
    fs.writeFileSync('E:\frontend-study\NodeJS\内置模块\test.txt',content)
}catch(err){
    console.error(err)
} */

try{
        let status=fs.statSync('E:\frontend-study\NodeJS\内置模块\test.txt')
        console.log(status.isFile())
        console.log(status.isDirectory())
        console.log(status.size)
    }catch(err){
        console.error(err)
}