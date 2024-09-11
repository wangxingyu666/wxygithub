<template>
    <div>
<div class="header">
    <h2>装备管理</h2>
    <input type="text" v-model="newEquipmentName" placeholder="输入装备名称">
    <button @click="addEquipment">添加装备</button>
</div>
<div class="options">
    <ul>
        <li v-for="(item,index) in equipmentList" :key="index">
            <span>{{ item }}</span>
            <button @click="removeEquipment(index)">删除</button>
        </li>
    </ul>
</div>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

const newEquipmentName=ref('');

const equipmentList=ref<string[]>([]);

const addEquipment=()=>{
    if(newEquipmentName.value.trim()){
        equipmentList.value.push(newEquipmentName.value.trim());
        newEquipmentName.value='';
    }
};

const removeEquipment=(index:number)=>{
    equipmentList.value.splice(index,1);
};


</script>

<style scoped>
.header,
.options{
    text-align: center;
}

input{
    width: 200px;
    height: 30px;
    margin: 10px;
    padding-left: 10px;
}

button{
    padding: 10px 20px;
    margin: 10px;
    background-color: green;
    color: aliceblue;
    border-radius: 5px;
}

ul{
list-style: none;
}
</style>