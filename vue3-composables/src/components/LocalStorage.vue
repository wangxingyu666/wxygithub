<template>
    <div>
         <p>本地存储的值:{{ myData }}</p>
         <input type="text" v-model="myData" placeholder="更新本地存储">
    </div>
</template>

<script setup lang="ts">
import { userLocalStorage } from '../composables/useLocalStorage';

const myData=userLocalStorage('username','张三')
</script>
