import { ref } from 'vue';

export function useSmsSender() {
  const isSending = ref(false);
  const errorMessage = ref('');

  const sendSms = (phoneNumber: string, message: string) => {
    isSending.value = true;
    errorMessage.value = '';

    setTimeout(() => {
      console.log(`短信发送到 ${phoneNumber}: ${message}`);
      isSending.value = false;
    }, 2000); // 2秒延迟
  };

  return { sendSms, isSending, errorMessage };
}
