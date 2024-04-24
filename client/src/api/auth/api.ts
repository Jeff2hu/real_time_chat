import AXIOS from "@Utils/axios";
import { LoginRequest, SignUpRequest } from "type/auth";
import SignUpProtocol from "./protocol";

export const postSignUp = async (data: SignUpRequest) => {
  try {
    const res = await AXIOS.post(SignUpProtocol.signUp, data);
    return res;
  } catch (err) {
    throw new Error("postSignUp");
  }
};

export const postLogin = async (data: LoginRequest) => {
  try {
    const res = await AXIOS.post(SignUpProtocol.login, data);
    return res;
  } catch (err) {
    throw new Error("postLogin");
  }
};
