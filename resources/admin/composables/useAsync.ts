import type {Ref} from 'vue'
import {ref} from 'vue'
import { useNotifications } from "./useNotifications";

interface UseAsync<T extends (...args: any[]) => unknown> {
  loading: Ref<boolean>
  validationErrors: Ref<any>
  run: (...args: Parameters<T>) => Promise<ReturnType<T> | unknown>
}

export default function useAsync<T extends (...args: any[]) => unknown>(fn: T): UseAsync<T> {
  const notifications = useNotifications()
  const loading: UseAsync<T>['loading'] = ref(false)
  const validationErrors: UseAsync<T>['validationErrors'] = ref()

  const run: UseAsync<T>['run'] = async (...args) => {
    loading.value = true
    try {
      const result = await fn(...args)
      return result as ReturnType<T>
    } catch (error: any) {
      validationErrors.value = null
      if (error?.response?.status === 422) {
        validationErrors.value = error.response.data
      } else {
        console.log(error)
        notifications.error('Something went wrong. Please try again.')
      }
      throw error
    } finally {
      loading.value = false
    }
  }

  return {loading, validationErrors, run}
}
