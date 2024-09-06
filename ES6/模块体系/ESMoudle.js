/* import util from './util.js'
var json={
    path:util.getPath(),
}
export default json */

/* export const name = '大闸蟹'
export const getAttr = () => {
    return name
}

import {
    name,
    getAttr
} from './a.js'
console.log(name)
console.log(getAttr) */

if(true){
    import('./xxx.json').then((json)=>{
        console.log(json)
    })
}