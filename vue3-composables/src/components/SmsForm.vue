<template>
     <div>
     <input v-model="phoneNumber" placeholder="输入手机号" />
     <input v-model="message" placeholder="输入短信内容" />
     <button @click="send">发送短信</button>
     <p v-if="isSending">发送中...</p >
     <p v-if="errorMessage">{{ errorMessage }}</p >
     </div>
    </template>
    
    <script lang="ts">
    import { defineComponent, ref } from 'vue';
    import { useSmsSender } from '../composables/useSmsSender';
    
    export default defineComponent({
     setup() {
     const { sendSms, isSending, errorMessage } = useSmsSender();
     const phoneNumber = ref('');
     const message = ref('');
    
     const send = () => {
     sendSms(phoneNumber.value, message.value);
 };
    
 return { phoneNumber, message, send, isSending, errorMessage };
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
  