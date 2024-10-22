import { defineStore } from "pinia";
import { ref } from "vue";

// 定义收支记录类型
interface Record {
  id: number;
  text: string;
  amount: number;
}


export const useFinanceStore = defineStore('finance', () => {
  const records = ref<Record[]>([]);

  const addRecord = (text: string, amount: number) => {
    const newRecord: Record = {
      id: Date.now(),
      text,
      amount,
    };
    records.value.push(newRecord);
  };

  const removeRecord = (index: number) => {
    records.value.splice(index, 1);
  };

  const totalIncome = () => {
    return records.value
      .filter(record => record.amount > 0)
      .reduce((sum, record) => sum + record.amount, 0);
  };

  const totalExpense = () => {
    return records.value
      .filter(record => record.amount < 0)
      .reduce((sum, record) => sum + record.amount, 0);
  };

  const balance = () => {
    return totalIncome() + totalExpense();
  };

  return {
    records,
    addRecord,
    removeRecord,
    totalIncome,
    totalExpense,
    balance,
  };
}, {
  persist: {
    key: 'finance-store',
    storage: localStorage,
  }
});
