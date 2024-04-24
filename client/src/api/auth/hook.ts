import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { postLogin, postSignUp } from "./api";

export const usePostSignUp = (successCb: () => void) => {
  return useMutation({
    mutationFn: postSignUp,
    onSuccess: (res) => {
      console.log("success");
      toast.success(res.data.message);
      successCb();
    },
  });
};

export const usePostLogin = (successCb: () => void) => {
  return useMutation({
    mutationFn: postLogin,
    onSuccess: (res) => {
      console.log("success");
      toast.success(res.data.message);
      successCb();
    },
  });
};
