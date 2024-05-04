import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ApiResponse } from "type/apiResponse";
import { AuthResponse } from "type/auth";
import { postLogin, postSignUp } from "./api";

export const usePostSignUp = (
  successCb: (res: ApiResponse<AuthResponse>) => void
) => {
  return useMutation({
    mutationFn: postSignUp,
    onSuccess: (res) => {
      toast.success(res.message);
      successCb(res);
    },
  });
};

export const usePostLogin = (
  onSuccess: (res: ApiResponse<AuthResponse>) => void
) => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess,
  });
};
