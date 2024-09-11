<template>
    <input :value="modelValue" @input="$emit('update:modelValue')" />
</template>

<script setup lang="ts">
//接收modelValue作为输入框的值
defineProps({
    modelValue:String
})
</script>