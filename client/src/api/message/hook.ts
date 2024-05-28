import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "./api";

export const useSendMessage = (successCb: () => void, onError: () => void) => {
  return useMutation({
    mutationFn: sendMessage,
    onSuccess: () => {
      successCb();
    },
    onError: () => {
      onError();
    },
  });
};
