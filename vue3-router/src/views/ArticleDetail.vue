<template>
    <div>
        <h2>{{ article.title }}</h2>
        <h2>{{ article.content }}</h2>
        <div style="height: 1500px;">
            <p>更多的文章内容，让页面足够长</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
//接收到路由中的id参数
const articleId = route.params.id;


const articles = [
    {
        id: 1,
        title: "如何学习Vue3",
        content:
            "如何学习Vue3如何学习Vue3如何学习Vue3如何学习Vue3"
    },
    {
        id: 2,
        title: "理解 Vue3",
        content:
            "理解 Vue3理解 Vue3理解 Vue3理解 Vue3理解 Vue3"
    },
];

//查找id为articleId的文章
const article = articles.find((a) => a.id === Number(articleId));
</script>

<style scoped></style>