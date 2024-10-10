<template>
    <div class="container">
      <h1>使用 useAnimate 移动图片</h1>
      <div class="button-group">
        <button @click="play" class="button">播放动画</button>
        <button @click="pause" class="button">暂停动画</button>
        <button @click="reverse" class="button">反向动画</button>
        <button @click="finish" class="button">完成动画</button>
        <button @click="cancel" class="button">取消动画</button>
      </div>
      <div class="image-wrapper">
        <span ref="el" class="animated-element">🐛</span>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useAnimate } from '@vueuse/core'
  import { ref } from 'vue'
  
  // 创建一个引用来引用 DOM 元素
  const el = ref()
  
  // 使用 useAnimate 创建动画，设置为从左到右移动
  const {
    play,
    pause,
    reverse,
    finish,
    cancel,
  } = useAnimate(el, {
    transform: 'translateX(500px)', // 从左到右移动500px
  }, 1000) // 动画持续时间为1000毫秒
  </script>
  
  <style scoped>
  .container {
    text-align: center;
    margin-top: 50px;
    font-family: 'Arial', sans-serif;
    background-color: #f9f9f9; /* 背景颜色 */
    border-radius: 10px; /* 边框圆角 */
    padding: 20px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
  }
  
  h1 {
    color: #42b983; /* 标题颜色 */
    margin-bottom: 20px; /* 底部间距 */
  }
  
  .button-group {
    margin-bottom: 20px; /* 按钮组底部间距 */
  }
  
  .button {
    background-color: #42b983; /* 按钮背景颜色 */
    color: white; /* 按钮文字颜色 */
    border: none; /* 去掉边框 */
    border-radius: 5px; /* 边框圆角 */
    padding: 10px 20px; /* 内边距 */
    margin: 5px; /* 按钮间距 */
    cursor: pointer; /* 鼠标指针效果 */
    transition: background-color 0.3s, transform 0.2s; /* 添加过渡效果 */
  }
  
  .button:hover {
    background-color: #36a372; /* 悬停效果 */
    transform: scale(1.05); /* 放大效果 */
  }
  
  .image-wrapper {
    display: flex; /* 使用 Flexbox */
    justify-content: center; /* 水平居中 */
    align-items: center; /* 纵向居中 */
    overflow: hidden; /* 隐藏超出容器的部分 */
    width: 600px; /* 设置容器宽度 */
    height: 100px; /* 设置容器高度 */
    margin: 0 auto; /* 居中容器 */
    border: 2px solid #42b983; /* 容器边框 */
    border-radius: 10px; /* 边框圆角 */
  }
  
  .animated-element {
    display: inline-block;
    font-size: 50px; /* 字体大小 */
  }
  </style>
  