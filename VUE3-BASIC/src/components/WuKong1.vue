<template>
  <div>
    <h2>{{ name }}</h2>
    <h3>{{ title }}</h3>
    <h3>{{ description }}</h3>
  </div>
</template>

<script setup>
import {ref} from 'vue'

const name=ref('孙悟空')
const title=ref('齐天大圣')
const description=ref('在《西游记》中，孙悟空是一个勇敢无畏，机智聪明的角色，以其强大的能力和不屈的精神著名')
</script>

<style scoped>
h2{
    background-color:yellow ;
    margin:auto;
    text-align: center;
}
h3{
    background-color:yellow ;
    margin:auto;
    text-align: center;
}
</style>