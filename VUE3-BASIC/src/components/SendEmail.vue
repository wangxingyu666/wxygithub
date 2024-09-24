<template>
    <div class="user-form">
        <EmailForm @submit-form="handleSubmit" />
        <p v-if="submitData">发送邮件信息:{{ submitData }}</p>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import EmailForm from "./EmailForm.vue";



const submitData = ref(null);

//处理子组件传递的参数
const handleSubmit = (data: any) => {
    submitData.value = data;
};
</script>

<style scoped>
.user-form{
    min-width: 300px;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ccc;
}
</style>