<template>
    <div>
<p>当前的温度:{{ temperature }}</p>
<button @click="increaseTemp">增加温度</button>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

//定义温度状态
const temperature=ref<number>(20)

//定义增加温度的方法
const increaseTemp=():void=>{
    temperature.value++
}
</script>