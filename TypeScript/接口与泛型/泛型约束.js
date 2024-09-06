"use strict";
//泛型函数，要求T必须具有length属性
function logLenth(arg) {
    console.log(arg.length);
    return arg;
}
//使用泛型函数
logLenth("Hello TypeScript");
logLenth([1, 2, 3]);
logLenth({ length: 10, value: 42 });
