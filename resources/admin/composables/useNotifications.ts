import * as pkg from 'vue-toastification'
const { useToast, POSITION } = pkg

const toast = useToast()

export const useNotifications = () => {
  function error (message: string, timeout = 5000) {
    toast.error(message, {
      position: POSITION.TOP_CENTER,
      timeout,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: 'button',
      icon: true,
      rtl: false
    })
  }

  function success (message: string, timeout = 5000) {
    toast.success(message, {
      position: POSITION.TOP_CENTER,
      timeout,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: 'button',
      icon: true,
      rtl: false
    })
  }

  function info (message: string, timeout = 5000) {
    toast.info(message, {
      position: POSITION.TOP_CENTER,
      timeout,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: 'button',
      icon: true,
      rtl: false
    })
  }

  function warning (message: string, timeout = 5000) {
    toast.warning(message, {
      position: POSITION.TOP_CENTER,
      timeout,
      closeOnClick: true,
      pauseOnFocusLoss: true,
      pauseOnHover: true,
      draggable: true,
      draggablePercent: 0.6,
      showCloseButtonOnHover: false,
      hideProgressBar: true,
      closeButton: 'button',
      icon: true,
      rtl: false
    })
  }

  return {
    error,
    success,
    info,
    warning
  }
}
