<template>
    <h2>技能列表</h2>
<ul>
    <li v-for="skill in skills" :key="skill.id">
        {{ skill.name }} -
        <sapn v-if="skill.status==true" class="y">已解锁</sapn>
        <span v-else class="n">未解锁</span>
    </li>
</ul>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Skill{
    id:number
    name:string
    status:boolean
}

const skills=ref<Skill[]>([
    {id:1,name:"七十二变",status:true},
    {id:2,name:"火眼金睛",status:false},
    {id:3,name:"筋斗云",status:true}
]);

</script>

<style scoped>
div{
    margin: auto;
    background-color: black;
    text-align: center;
}
.y{
    color: green;
}
.n{
    color: red;
}
</style>