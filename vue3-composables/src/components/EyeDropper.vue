<template>
    <div class="container">
      <h1 :style="{ color: selectedColor }">使用useEyeDropper提取颜色</h1>
      <button @click="pickColor" class="button">提取颜色</button>
      <!-- <button @click="changeTextColor" class="button" v-if="extractedColor">改变文本颜色</button> -->
      <p v-if="error" class="error">{{ error }}</p>
      <p v-if="extractedColor">当前提取颜色: <span :style="{ color: extractedColor }">{{ extractedColor }}</span></p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useEyeDropper } from '@vueuse/core'
  
  // 响应式状态
  const selectedColor = ref('#000000') // 默认文本颜色
  const extractedColor = ref('') // 存储提取的颜色
  const error = ref('') // 存储错误信息
  
  // 使用 EyeDropper API
  const { open } = useEyeDropper()
  
  // 提取颜色的函数
  const pickColor = async () => {
    try {
      const color = await open() // 打开颜色选择器
      extractedColor.value = color // 存储提取的颜色
      error.value = '' // 清除错误信息
    } catch (err) {
      error.value = '无法提取颜色，请重试。'
      console.error(err) // 打印错误信息
    }
  }
  
  // 改变文本颜色的函数
  const changeTextColor = () => {
    if (extractedColor.value) {
      selectedColor.value = extractedColor.value // 更新文本颜色
    }
  }
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin-top: 50px;
    font-family: Arial, sans-serif;
  }
  
  .button {
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin: 5px; /* 增加按钮之间的间距 */
  }
  
  .button:hover {
    background-color: #36a372;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
  
  