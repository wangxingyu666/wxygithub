import { ref,watch } from "vue"


export function userLocalStorage(key:string,defaultValue:string){
    const storedValue=localStorage.getItem(key)||defaultValue
    const data=ref<string>(storedValue)

    watch(data,(newValue)=>{
        localStorage.setItem(key,newValue)
    })

    return data
}