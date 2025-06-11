import instance from '../utils/axios';
import type { SignupPayload, LoginPayload } from '../redux/auth/authTypes';

export const signupApi = async (data: SignupPayload) => {
  const response = await instance.post("/auth/signup", data);
  return response.data;
};

export const loginApi = async (data: LoginPayload) => {
  const response = await instance.post("/auth/login", data);
  return response.data;
};
