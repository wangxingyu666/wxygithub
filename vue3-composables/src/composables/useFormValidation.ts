import { reactive, ref, computed } from 'vue'

// 定义验证规则类型
type ValidatorFn = (value: any) => string | true

// 单个表单字段的配置
interface FieldConfig {
  value: any;
  validators?: ValidatorFn[];
}

// 验证状态
interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

// 组合式函数的返回类型
interface FormValidationReturn {
  form: { [key: string]: FieldConfig };
  errors: { [key: string]: string[] };
  isValid: () => boolean;
  validateField: (field: string) => ValidationResult;
  validateForm: () => boolean;
}

// 表单验证组合式函数
export function useFormValidation(initialForm: { [key: string]: FieldConfig }): FormValidationReturn {
  // 响应式表单状态
  const form = reactive(initialForm)

  // 存储所有字段的错误消息，初始化为一个空数组
  const errors = reactive<{ [key: string]: string[] }>({})

  // 初始化 errors 对象中的字段
  Object.keys(form).forEach(field => {
    errors[field] = [] // 初始化每个字段的错误数组
  })

  // 验证单个字段
  const validateField = (field: string): ValidationResult => {
    const fieldConfig = form[field]
    const fieldErrors: string[] = []

    if (fieldConfig && fieldConfig.validators) {
      for (const validator of fieldConfig.validators) {
        const result = validator(fieldConfig.value)
        if (result !== true) {
          fieldErrors.push(result)
        }
      }
    }

    errors[field] = fieldErrors

    return {
      isValid: fieldErrors.length === 0,
      errors: fieldErrors,
    }
  }

  // 验证整个表单
  const validateForm = (): boolean => {
    let isFormValid = true

    for (const field in form) {
      const result = validateField(field)
      if (!result.isValid) {
        isFormValid = false
      }
    }

    return isFormValid
  }

  // 计算表单是否整体有效
  const isValid = computed(() => {
    return Object.values(errors).every((fieldErrors) => fieldErrors.length === 0)
  })

  return {
    form,
    errors,
    isValid: () => isValid.value,
    validateField,
    validateForm,
  }
}
