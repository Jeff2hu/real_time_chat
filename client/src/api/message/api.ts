import AXIOS from "@Utils/axios";
import useConversation from "@Zustand/useConversation";
import { AxiosResponse } from "axios";
import { SendMessageRequest } from "type/message";
import MessageProtocol from "./protocol";

export const sendMessage = async (req: SendMessageRequest) => {
  const { selectedConversation, setMessages, messages } =
    useConversation.getState();

  try {
    if (!selectedConversation) throw new Error("No conversation selected");

    const res: AxiosResponse<any, SendMessageRequest> = await AXIOS.post(
      MessageProtocol.send(selectedConversation._id),
      req
    );

    setMessages([...messages, res.data.message]);

    return res.data;
  } catch (err) {
    throw new Error("sendMessage");
  }
};
