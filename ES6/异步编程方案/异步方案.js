const promise=new Promise((resolve,reject)=>{
    Request({
        url:'http://xxx.com',
        onSuccess(data){
            resolve(data)
        },
        onError(err){
            reject(err)
        },
    })
})

Promise,then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log('完成')
})

