<template>
    <div>
<!-- <input type="checkbox" v-model="isChecked" />勾选此项
<p>复选框状态::{{ isChecked?'已勾选':'未勾选' }}</p> -->

<!-- <input type="radio" v-model="selectedOption" value="A" />选项A
<input type="radio" v-model="selectedOption" value="B" />选项B
<p>您选择的选项是:{{ selectedOption }}</p> -->

<!-- <select v-model="selectedItem">
    <option disabled value="">请选择一个选项</option>
    <option value="苹果">苹果</option>
    <option value="香蕉">香蕉</option>
    <option value="橘子">橘子</option>
</select>
<p>您选择的水果是:{{ selectedItem }}</p> -->

<label><input type="checkbox" v-model="selectedFruits" value="苹果"/>苹果</label>
<label><input type="checkbox" v-model="selectedFruits" value="香蕉"/>香蕉</label>
<label><input type="checkbox" v-model="selectedFruits" value="橘子"/>橘子</label>
<p>您选择的水果是:{{ selectedFruits.join(',') }}</p>
    </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'

//定义双向绑定的状态
//const name=ref<string>('')//初始值为空字符串

//定义复选框的绑定状态
//const isChecked=ref<boolean>(false)

//定义单选框的选项状态
//const selectedOption=ref<string>('A')

//const selectedItem=ref<string>('')

//选中的水果会以数组的形式存储
const selectedFruits=ref<string[]>([])
</script>