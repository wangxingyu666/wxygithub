/* function multiply(a,b=1){
    return 
} */

/* function eat(food='苹果'){
    console.log(food)
}
eat()
eat('香蕉') */

const myLog=(tag,...args)=>{
    console.log(`${tag}:`,args)
}
myLog('水果','火龙果')
myLog('零食','坚果','芒果干','辣条')