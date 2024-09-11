<template>
    <div>
<!--绑定disabled属性-->
<button v-bind="isDisabled">点击我</button>
    </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

//定义响应式的布尔变量
const isDisabled=reactive({
    disabled:false,
    title:'按钮已禁用',
    id:'unique-button',
})
</script>