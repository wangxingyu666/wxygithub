<template>
    <div>
      <h2>注册表单</h2>
      <form @submit.prevent="handleSubmit">
        <div>
          <label>用户名</label>
          <input v-model="form.username.value" @blur="validateField('username')" />
          <p v-if="errors.username.length">{{ errors.username[0] }}</p>
        </div>
  
        <div>
          <label>邮箱</label>
          <input v-model="form.email.value" @blur="validateField('email')" />
          <p v-if="errors.email.length">{{ errors.email[0] }}</p>
        </div>
  
        <div>
          <label>密码</label>
          <input v-model="form.password.value" type="password" @blur="validateField('password')" />
          <p v-if="errors.password.length">{{ errors.password[0] }}</p>
        </div>
  
        <button type="submit">提交</button>
      </form>
  
      <p v-if="!isValid">表单无效，请修正错误</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { useFormValidation } from '../composables/useFormValidation'
  
  // 自定义验证规则
  const required = (value: any) => (value ? true : '该字段是必填项')
  const isEmail = (value: any) => (/^\S+@\S+\.\S+$/.test(value) ? true : '请输入有效的邮箱地址')
  const minLength = (min: number) => (value: any) => (value.length >= min ? true : `至少需要 ${min} 个字符`)
  
  // 表单字段及验证规则
  const { form, errors, isValid, validateField, validateForm } = useFormValidation({
    username: { value: '', validators: [required] },
    email: { value: '', validators: [required, isEmail] },
    password: { value: '', validators: [required, minLength(6)] }
  })
  
  // 表单提交逻辑
  const handleSubmit = () => {
    if (validateForm()) {
      alert('表单提交成功！')
    } else {
      alert('请修正表单中的错误！')
    }
  }
  </script>
  
  <style scoped>
  input {
    display: block;
    margin-bottom: 10px;
    padding: 8px;
    width: 100%;
  }
  
  button {
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:disabled {
    background-color: #95a5a6;
  }
  
  p {
    color: red;
    font-size: 0.9em;
  }
  </style>
  