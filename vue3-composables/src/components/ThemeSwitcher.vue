<template>
    <div>
      
      <button @click="handleToggle">
        切换到 {{ isDark ? '白天模式' : '夜间模式' }}
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useDark, useToggle } from '@vueuse/core'
  import { watch } from 'vue'
  
  // 使用 VueUse 的 useDark 和 useToggle
  const isDark = useDark()
  const toggleDarkMode = useToggle(isDark)
  
  // 中间处理函数，兼容 onClick 事件
  const handleToggle = () => {
    toggleDarkMode() // 切换模式
    document.body.classList.toggle('dark', isDark.value); // 切换 body 的 class
    console.log('当前模式:', isDark.value);   
}
  
  // 监听 isDark 的变化，并存储到 localStorage
  watch(isDark, (newValue) => {
    localStorage.setItem('dark-mode', newValue ? 'true' : 'false')
  })
  
  // 从 localStorage 初始化
  if (localStorage.getItem('dark-mode') === 'true') {
    isDark.value = true
    document.body.classList.add('dark'); // 初始化时设置 class
  }
  </script>
  
  <style>
  /* 白天模式样式 */
  body {
    background-color: white;
    color: black;
  }
  
  /* 夜间模式样式 */
  body.dark {
    background-color: black;
    color: white;
  }
  
  button {
    padding: 10px;
    margin-top: 20px;
  }
  </style>
  