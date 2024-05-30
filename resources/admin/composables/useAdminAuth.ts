import { AuthLoginForm } from "../types/Auth";
import axios from "axios";

export const useAdminAuth = () => {
  function login(form: AuthLoginForm) {
    return axios.post('/auth/login', form)
  }

  function logout() {
    return axios.post('/auth/logout')
  }

  return {
    login,
    logout
  }
}
