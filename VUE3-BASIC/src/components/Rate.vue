<template>  
    <div class="demo-rate-block">  
      <span class="demonstration">顾克</span>  
      <el-rate v-model="value1" />  
      <img src="@/assets/2.jpg" alt="Default Image" class="demo-image" />  
    </div>  
    <div class="demo-rate-block">  
      <span class="demonstration">王永健</span>  
      <el-rate v-model="value2" :colors="colors" />  
      <img src="@/assets/1.jpg" alt="Color Image" class="demo-image" />  
    </div>  
  </template>  
    
  <script lang="ts" setup>  
  import { ref } from 'vue'  
    
  const value1 = ref(0)  
  const value2 = ref(0)  
  const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }  
  </script>  
    
  <style scoped>  
  .demo-rate-block {  
    padding: 30px 0;  
    text-align: center;  
    border-right: solid 1px var(--el-border-color);  
    display: inline-block;  
    width: 49%;  
    box-sizing: border-box;  
    position: relative; /* 确保图片不会超出容器 */  
  }  
    
  .demo-rate-block:last-child {  
    border-right: none;  
  }  
    
  .demo-rate-block .demonstration {  
    display: block;  
    color: black;  
    font-size: 30px;  
    margin-bottom: 20px;  
  }  
    
  .demo-image {  
    width: 300px; /* 或者你想要的任何尺寸 */  
    height: auto;  
    display: block;  
    margin: 20px auto; /* 居中图片 */  
  }  
  </style>