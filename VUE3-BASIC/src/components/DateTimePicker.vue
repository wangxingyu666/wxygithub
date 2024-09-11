<template>
<input type="date" :value="modelValue" @input="$emit('update:modelValue')" />
<input type="time" :value="timeValue" @input="$emit('update:timeValue')" />
</template>

<script setup lang="ts">
defineProps({
    modelValue:String,
    timeValue:String
})
</script>