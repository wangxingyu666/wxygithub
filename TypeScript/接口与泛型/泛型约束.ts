//定义一个具有泛型约束的接口
interface Lengthwise{
    length:number;
}

//泛型函数，要求T必须具有length属性
function logLenth<T extends Lengthwise>(arg:T):T{
    console.log(arg.length);
    return arg;
}

//使用泛型函数
logLenth("Hello TypeScript");
logLenth([1,2,3]);
logLenth({length:10,value:42});