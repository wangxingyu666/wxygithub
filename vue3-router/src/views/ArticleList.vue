<template>
    <div>
        <h2>文章列表</h2>
        <div style="height: 1500px;">
            <!--这是占位-->
            <p>这里是非常长的页面内容</p>
        </div>
        <ol>
            <li v-for="article in articles" :key="article.id">
                <router-link :to="`/articles/${article.id}`">
                    {{ article.title }}
                </router-link>
            </li>
        </ol>
    </div>
</template>

<script lang="ts" setup>
const articles=[
    {
        id: 1,
        title: "如何学习Vue3",
    },
    {
        id: 2,
        title: "理解 Vue3",
    },
];
</script>

<script lang="ts">
export default {
    beforeRouteEnter(to,from,next){
        console.log(to,from);
        console.log("进入该页面前的检查");
        next();
    }
}
</script>

<style scoped>
ol li{
    margin-bottom: 10px;
}

a {
    margin: 10px;
    text-decoration: none;
    color: #3baee0;
    padding: 5px 10px;
}
</style>
