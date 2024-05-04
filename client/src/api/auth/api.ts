import AXIOS from "@Utils/axios";
import { AxiosResponse } from "axios";
import { ApiResponse } from "type/apiResponse";
import { AuthResponse, LoginRequest, SignUpRequest } from "type/auth";
import SignUpProtocol from "./protocol";

export const postSignUp = async (data: SignUpRequest) => {
  try {
    const res: AxiosResponse<
      ApiResponse<AuthResponse>,
      SignUpRequest
    > = await AXIOS.post(SignUpProtocol.signUp, data);
    return res.data;
  } catch (err) {
    throw new Error("postSignUp");
  }
};

export const postLogin = async (data: LoginRequest) => {
  try {
    const res: AxiosResponse<
      ApiResponse<AuthResponse>,
      LoginRequest
    > = await AXIOS.post(SignUpProtocol.login, data);
    return res.data;
  } catch (err) {
    throw new Error("postLogin");
  }
};
