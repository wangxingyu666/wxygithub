<template>
    <div class="container" tabindex="0" @keyup="handleKeyup">
      <h1>使用 Magic Keys 示例</h1>
      <p>当前按下的键: <strong>{{ pressedKey }}</strong></p>
      <button @click="reset">重置</button>
      <p v-if="actionMessage">{{ actionMessage }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useMagicKeys } from '@vueuse/core'
  
  const pressedKey = ref('') // 存储当前按下的键
  const actionMessage = ref('') // 存储动作信息
  
  // 使用 useMagicKeys 监听按键
  const { Enter, Space, Escape } = useMagicKeys()
  
  const handleKeyup = () => {
    if (Enter.value) {
      pressedKey.value = 'Enter'
      actionMessage.value = '您按下了 Enter 键！'
    } else if (Space.value) {
      pressedKey.value = 'Space'
      actionMessage.value = '您按下了 Space 键！'
    } else if (Escape.value) {
      pressedKey.value = 'Escape'
      actionMessage.value = '您按下了 Escape 键！'
    } else {
      pressedKey.value = '' // 如果没有按下有效的键，清空当前键
      actionMessage.value = ''
    }
  }
  
  // 重置功能
  const reset = () => {
    pressedKey.value = ''
    actionMessage.value = ''
  }
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    margin-top: 20px;
  }
  </style>