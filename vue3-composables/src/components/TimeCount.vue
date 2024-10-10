<template>  
    <div>  
      <p>倒计时: {{ formattedTime }}</p >  
      <button @click="startTimer">开始</button>  
      <button @click="pauseTimer">暂停</button>  
      <button @click="resetTimer(60)">重置</button>  
    </div>  
  </template>  
    
  <script lang="ts">  
  import { defineComponent } from 'vue';  
  import { useCountDown } from '../composables/useCountDown';  
    
  export default defineComponent({  
    name: 'TimeCount',  
    setup() {  
      const { timeLeft, formattedTime, startTimer, resetTimer, pauseTimer } = useCountDown(60);  
    
      return {  
        timeLeft,  
        formattedTime,  
        startTimer,  
        resetTimer,  
        pauseTimer,  
      };  
    },  
  });  
  </script>  
    
  <style scoped>  
button{
    background-color:rgb(72, 72, 192);
    color: #fff;
    margin: 10px;
    border:none;
    padding:10px 20px;
    border-radius:8px
}
  </style>