import { ref, onUnmounted, computed } from 'vue';  
  
export function useCountDown(initialTime: number) {  
  const timeLeft = ref(initialTime);  
  const timerId = ref<number | null>(null);  
  
  const formattedTime = computed(() => {  
    const minutes = Math.floor(timeLeft.value / 60).toString().padStart(2, '0');  
    const seconds = (timeLeft.value % 60).toString().padStart(2, '0');  
    return `${minutes}:${seconds}`;  
  });  
  
  const startTimer = () => {  
    if (timerId.value !== null) return;  
  
    const countdown = () => {  
      if (timeLeft.value > 0) {  
        timeLeft.value -= 1;  
      } else {  
        clearInterval(timerId.value!);  
        timerId.value = null;  
      }  
    };  
  
    timerId.value = window.setInterval(countdown, 1000);  
  };  
  
  const resetTimer = (resetTo?: number) => {  
    if (timerId.value !== null) {  
      clearInterval(timerId.value);  
      timerId.value = null;  
    }  
    timeLeft.value = resetTo !== undefined ? resetTo : initialTime;  
  };  
  
  const pauseTimer = () => {  
    if (timerId.value !== null) {  
      clearInterval(timerId.value);  
      timerId.value = null;  
    }  
  };  
  
  onUnmounted(() => {  
    resetTimer();  
  });  
  
  return {  
    timeLeft,  
    formattedTime,  
    startTimer,  
    resetTimer,  
    pauseTimer,  
  };  
}