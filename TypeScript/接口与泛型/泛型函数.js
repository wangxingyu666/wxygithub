"use strict";
//定义一个泛型函数，T是泛型参数
function identity(arg) {
    return arg;
}
//使用泛型函数
let output1 = identity("Hello TypeScript");
let output2 = identity(42);
console.log(output1);
console.log(output2);
