<template>
    <div>
<p>血量: {{ lastblood }}/{{ blood }}({{ (lastblood/blood)*100 }}%)</p>
    <meter class="health-meter" max="100" high="80" low="30" min="0" optimum="80" :value="lastblood"></meter>
    </div>
</template>

<script setup lang="ts">
import {ref , computed} from 'vue'

const blood=ref<number>(100)
const attack=ref<number>(20)

const lastblood= computed(()=>{
    return blood.value-attack.value
})
</script>

<style scoped>
div{
    text-align: center;
}

progress{
    width: 800px;
    background-color: green;
}

.health-meter{
    width: 100%;
    height: 20px;
    border-radius:10px;
    background: white;
}


</style>