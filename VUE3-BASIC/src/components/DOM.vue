<template>
    <div ref="box" class="box">我是一个方块</div>
<!-- <input ref="inputElement" type="text" placeholder="聚焦在此" />
<button @click="focusInput">点击聚焦输入框</button> -->
    
</template>

<script setup lang="ts">
import {ref ,onMounted } from 'vue'

//获取DOM元素的引用
/* const inputElement =ref<HTMLInputElement |null>(null)

//操作DOM元素
const focusInput=()=>{
    if(inputElement.value){
        inputElement.value.focus()
    }
} */

//获取DOM元素的引用
const box=ref<HTMLDivElement |null>(null)

//在组件挂载后操作DOM
onMounted(()=>{
    if(box.value){
        box.value.style.backgroundColor='lightblue'
    }
})
</script>

<style scoped>
.box{
    width: 100px;
    height: 100px;
    background-color: gray;
}
</style>