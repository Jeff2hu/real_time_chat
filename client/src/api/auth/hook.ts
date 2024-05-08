import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ApiResponse } from "type/apiResponse";
import { AuthResponse } from "type/auth";
import { postLogin, postSignUp } from "./api";

export const usePostSignUp = (
  successCb: (res: ApiResponse<AuthResponse>) => void,
  onError: () => void
) => {
  return useMutation({
    mutationFn: postSignUp,
    onSuccess: (res) => {
      toast.success(res.message);
      successCb(res);
    },
    onError: () => {
      onError();
    },
  });
};

export const usePostLogin = (
  onSuccess: (res: ApiResponse<AuthResponse>) => void,
  onError: () => void
) => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: (res) => {
      toast.success(res.message);
      onSuccess(res);
    },
    onError: () => {
      onError();
    },
  });
};
