import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ApiResponse } from "type/apiResponse";
import { LoginResponse } from "type/auth";
import { postLogin, postSignUp } from "./api";

export const usePostSignUp = (successCb: () => void) => {
  return useMutation({
    mutationFn: postSignUp,
    onSuccess: (res) => {
      toast.success(res.message);
      successCb();
    },
  });
};

export const usePostLogin = (
  onSuccess: (res: ApiResponse<LoginResponse>) => void
) => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess,
  });
};
