<template>
  <div>
<p>当前用户:{{ userName }}</p>
<p>2+2的结果是:{{ 2+2 }}</p>
<p>用户全名:{{ firstName+''+lastName }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

//定义一个响应式状态
const userName=ref<string>('张三')
const firstName=ref<string>('张')
const lastName=ref<string>('三')
</script>
