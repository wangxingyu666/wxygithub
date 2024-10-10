import { ref } from "vue";


export function useCounter(initvalue =0){
    //响应式变量 number,初值为入参initValue
    const count= ref<number>(initvalue)

    //增加计数的函数
    const increament=()=>{
        count.value++;
    }

    //减少计数的函数
    const decreament=()=>{
        count.value--;
    }

    const reset=()=>{
        count.value=0;
    }
    return{
        count,increament,decreament,reset
    }
}