<template>  
  <div class="container">  
    <input type="text" v-model="newTaskLabel" placeholder="输入新任务名称" />  
    <el-button type="primary" @click="addTask">添加任务</el-button>   
    <el-transfer v-model="selectedKeys" :data="transferData" />
  </div>  
</template>  
  
<script lang="ts" setup>  
import { ref } from 'vue'  
  
interface Option {  
  key: number  
  label: string  
  disabled: boolean  
}  
  
const generateInitialData = () => {  
  const data: Option[] = []  
  for (let i = 1; i <= 15; i++) {  
    data.push({  
      key: i,  
      label: `任务 ${i}`,  
      disabled: i % 4 === 0,  
    })  
  }  
  return data  
}  
  
const newTaskLabel = ref<string>('')  
const transferData = ref<Option[]>(generateInitialData())  
const selectedKeys = ref<number[]>([])  
  
// 添加任务  
const addTask = () => {  
  if (!newTaskLabel.value.trim()) return  
  const newTaskId = transferData.value.length + 1  
  transferData.value.push({  
    key: newTaskId,  
    label: newTaskLabel.value,  
    disabled: false,  
  })  
  newTaskLabel.value = '' 
}  


</script>  
  
<style scoped>  
.container {  
  display: flex;  
  flex-direction: column;  
  align-items: center;
  justify-content: center;
  height: 100vh; 
  width: 100%;
  padding: 20px;
}   
</style>