"use strict";
//定义一个泛型类
class GenericNumber {
    constructor(zeroValue, affFn) {
        this.zeroValue = zeroValue;
        this.add = affFn;
    }
}
//使用泛型类
let myGenericNumber = new GenericNumber(0, (x, y) => x + y);
console.log(myGenericNumber.add(5, 10));
let myGenericString = new GenericNumber("", (x, y) => x + y);
console.log(myGenericString.add("Hello, ", "World"));
