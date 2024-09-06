//定义一个带有默认泛型类型的函数
function createArray<T =string>(length:number,value:T):T[]{
    return Array(length).fill(value);
}

//使用泛型函数
let stringArray=createArray(3,"Hello");
let numberArray=createArray<number>(3,42);

console.log(stringArray);
console.log(numberArray);