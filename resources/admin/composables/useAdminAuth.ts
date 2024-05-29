import { AuthLoginForm } from "../types/auth";
import axios from "axios";

export const useAdminAuth = () => {
  function login(form: AuthLoginForm) {
    return axios.post('/auth/login', form)
  }

  return {
    login
  }
}
