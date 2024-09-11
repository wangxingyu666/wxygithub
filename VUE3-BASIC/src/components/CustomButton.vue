<template>
    <button>{{ customAttr }}</button>
</template>

<script setup lang="ts">
import {defineProps} from 'vue'

//使用defineProps声明自定义属性
defineProps<{
    customAttr:string
}>()
</script>

<style scoped>

</style>