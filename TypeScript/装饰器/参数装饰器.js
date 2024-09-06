"use strict";
function LogParameter(target, propertyKey, parameterIndex) {
    console.log(`Parameter at index ${parameterIndex} in method ${propertyKey}`);
}
class DemoClass {
    greet(message) {
        console.log(message);
    }
}
const demoClass = new DemoClass();
demoClass.greet('Hello');
