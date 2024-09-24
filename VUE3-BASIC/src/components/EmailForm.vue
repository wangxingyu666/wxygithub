<template>  
    <div class="email-form-container">  
        <form @submit.prevent="submitForm">  
            <div class="form-group">  
                <input type="text" placeholder="请输入收件人邮箱" v-model="form.to" class="form-input" />  
            </div>  
            <div class="form-group">  
                <input type="text" placeholder="请输入邮件主题" v-model="form.subject" class="form-input" />  
            </div>  
            <div class="form-group">  
                <textarea placeholder="请输入邮件内容" v-model="form.body" class="form-textarea"></textarea>  
            </div>  
            <button type="submit" class="form-button">发送</button>  
        </form>  
    </div>  
</template>  
  
<script setup lang="ts">  
import { reactive } from "vue";  
  
const form = reactive({  
    to: "",  
    subject: "",  
    body: "",  
});  
  
const emit = defineEmits<{ "submit-email": [any] }>();  
  
const submitForm = () => {  
    emit("submit-email", form);  
};  
</script>  
  
<style scoped>  
.email-form-container {  
    width: 100%;  
    max-width: 600px;  
    margin: 20px auto;  
    padding: 20px;  
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
    border-radius: 8px;  
    background-color: #f9f9f9;  
}  
  
.form-group {  
    margin-bottom: 15px;  
}  
  
.form-input,  
.form-textarea {  
    width: 100%;  
    padding: 10px;  
    border: 1px solid #ccc;  
    border-radius: 4px;  
    box-sizing: border-box;  
    font-size: 16px;  
}  
  
.form-textarea {  
    height: 100px;  
    resize: vertical;  
}  
  
.form-button {  
    width: 100%;  
    padding: 10px;  
    background-color: #007bff;  
    color: white;  
    border: none;  
    border-radius: 4px;  
    cursor: pointer;  
    font-size: 16px;  
    transition: background-color 0.3s;  
}  
  
.form-button:hover {  
    background-color: #0056b3;  
}  
</style>