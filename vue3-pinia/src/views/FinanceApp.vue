<template>
  <div>
    <h1>记账应用</h1>

    <div>
      <h3>添加新记录</h3>
      <select v-model="recordType">
        <option value="income">收入</option>
        <option value="expense">支出</option>
      </select>
      <input type="text" v-model="newRecordText" placeholder="描述" />
      <input type="number" v-model.number="newRecordAmount" placeholder="金额" />
      <button @click="addNewRecord">添加记录</button>
    </div>

    <div>
      <h3>记录列表</h3>
      <ul>
        <li v-for="(record, index) in records" :key="record.id">
          {{ record.text }} - {{ record.amount }}元
          <button @click="removeRecord(index)">删除</button>
        </li>
      </ul>
    </div>

    <div>
      <h3>统计信息</h3>
      <p>总收入：{{ totalIncome }}元</p>
      <p>总支出：{{ totalExpense }}元</p>
      <p>当前余额：{{ currentBalance }}元</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useFinanceStore } from '../stores/useFinanceStore';

const financeStore = useFinanceStore();

// 新记录的描述、金额和类型
const newRecordText = ref("");
const newRecordAmount = ref(0);
const recordType = ref("income"); // 默认记录类型为收入

// 添加新记录
const addNewRecord = () => {
  if (newRecordText.value.trim() && newRecordAmount.value !== 0) {
    const amount = recordType.value === "income" ? newRecordAmount.value : -newRecordAmount.value;
    financeStore.addRecord(newRecordText.value, amount);
    newRecordText.value = "";  // 清空输入框
    newRecordAmount.value = 0; // 重置金额
  }
};

// 删除记录
const removeRecord = (index: number) => {
  financeStore.removeRecord(index);
};

// 获取记录
const records = financeStore.records;

// 计算总收入、总支出和当前余额
const totalIncome = computed(() => financeStore.totalIncome());
const totalExpense = computed(() => financeStore.totalExpense());
const currentBalance = computed(() => financeStore.balance());
</script>

<style scoped>
h1 {
  color: #2c3e50;
}

input {
  margin: 5px 0;
}

select {
  margin: 5px 0;
}

button {
  margin-left: 10px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 5px;
  border-bottom: 1px solid #ccc;
}

li button {
  margin-left: 10px;
  cursor: pointer;
}

h3 {
  margin-top: 20px;
}
</style>  