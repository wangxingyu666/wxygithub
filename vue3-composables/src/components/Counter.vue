<template>
    <div>
        <p>当前计数器的值:{{ count }}</p>
        <button @click="increament">增加</button>
        <button @click="decreament">减少</button>
        <button @click="reset">清空</button>
    </div>
</template>

<script setup lang="ts">
import { useCounter } from '../composables/useCounter';

const { count, increament, decreament,reset } = useCounter(10)


</script>

<style scoped>
button{
    background-color: green;
    color: #fff;
    margin: 10px;
    border:none;
    padding:10px 20px;
    border-radius:8px
}
</style>